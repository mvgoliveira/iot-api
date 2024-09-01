const { BD } = require('../bd');

function getTemperatureByAssetId(assetId) {
  const spaceData = BD.space;

  const temperature = spaceData.assets.find(asset => asset.id === assetId).temperature;

  return temperature;
}

function updateTemperatureByAssetId(assetId) {
  try {
    const newTemperature = Math.floor(Math.random() * 25) + 15;

    const spaceData = BD.space;

    let newTemperatureData = spaceData.assets.find(asset => asset.id === assetId).temperature;

    return {
      ...newTemperatureData,
      value: newTemperature,
    }
  } catch (error) {
    console.error('Erro ao atualizar o arquivo bd.json:', error);
  }
}

module.exports = { getTemperatureByAssetId, updateTemperatureByAssetId };
