const WebSocket = require('ws');

const { getTemperatureByAssetId, updateTemperatureByAssetId } = require('./services/temperatureService'); 
const { getAssets, getAssetById } = require('./services/assetService');
const { getEnergiesByAssetId, updateEnergyStateByEnergyId } = require('./services/energyService');

const wss = new WebSocket.Server({ port: 8080 });

console.log('Servidor WebSocket rodando na porta 8080...');

let newTempIntervalId = "";

wss.on('connection', (ws) => {
	console.log('Novo cliente conectado.');

	const assets = getAssets();

	if (assets) {
		ws.send(JSON.stringify({ type: 'assets', data: assets }));
	}

	ws.on('message', (message) => {
		try {
			const parsedMessage = JSON.parse(message);

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
					ws.send(JSON.stringify({ type: 'new-temperature', data: temperatureData }));
				}

				newTempIntervalId = setInterval(() => updateTemperature(parsedMessage.assetId), 5000);
			}

			if (parsedMessage.type === 'energiesRequest') {
				console.log(parsedMessage.assetId);

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
					ws.send(JSON.stringify({ type: 'changeEnergyResponse', data: energiesData }));
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