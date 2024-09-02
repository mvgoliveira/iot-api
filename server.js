const WebSocket = require('ws');
const { BD } = require('./bd');

const { getTemperatureByAssetId, updateTemperatureByAssetId } = require('./services/temperatureService'); 
const { getAssetById } = require('./services/assetService');
const { getEnergiesByAssetId, updateEnergyStateByEnergyId } = require('./services/energyService');

const wss = new WebSocket.Server({ port: 8080 });

console.log('Servidor WebSocket rodando na porta 8080...');

let newTempIntervalId = "";

wss.on('connection', (ws) => {
	console.log('Novo cliente conectado.');

	ws.on('message', (message) => {
		try {
			const parsedMessage = JSON.parse(message);

			if (parsedMessage.type === 'spacesRequest') {
				const spacesData = BD.spaces;

				if (spacesData) {
					ws.send(JSON.stringify({ type: 'spacesResponse', data: spacesData }));
				}
			}

			if (parsedMessage.type === 'assetRequest') {
				const assetData = getAssetById(parsedMessage.assetId)

				if (assetData) {
					ws.send(JSON.stringify({ type: 'assetResponse', data: assetData }));
				}
			}

			if (parsedMessage.type === 'temperatureRequest') {
				clearInterval(newTempIntervalId);
				getTemperatureByAssetId(parsedMessage.assetId);

				function updateTemperature(assetId) {
					const temperatureData = updateTemperatureByAssetId(assetId);
					ws.send(JSON.stringify({ type: 'temperatureResponse', data: temperatureData }));
				}

				newTempIntervalId = setInterval(() => updateTemperature(parsedMessage.assetId), 5000);
			}

			if (parsedMessage.type === 'energiesRequest') {
				const energiesData = getEnergiesByAssetId(parsedMessage.assetId);

				if (energiesData) {
					ws.send(JSON.stringify({ type: 'energiesResponse', data: energiesData }));
				}
			}

			if (parsedMessage.type === 'changeEnergyRequest') {
				const energiesData = updateEnergyStateByEnergyId(
					parsedMessage.assetId,
					parsedMessage.energyId,
					parsedMessage.status
				);

				if (energiesData) {
					wss.clients.forEach((client) => {
						if (client.readyState === WebSocket.OPEN) {
						  client.send(JSON.stringify({ type: 'changeEnergyResponse', data: energiesData }));
						}
					  });
				
				}
			}
		} catch (error) {
			console.error('Erro ao processar a mensagem:', error);
		}
	});

	ws.on('close', () => {
		console.log('Cliente desconectado.');
	});
});