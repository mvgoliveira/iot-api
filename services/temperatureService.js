const { BD } = require('../bd');

function getTemperatureByAssetId(assetId) {
  const spacesData = BD.spaces;

  const temperature = spacesData[0].assets.find(asset => asset.id === assetId).temperature;

  return temperature;
}

function updateTemperatureByAssetId(assetId) {
  try {
    const newTemperature = Math.floor(Math.random() * 25) + 15;

    const spacesData = BD.spaces;

    let newTemperatureData = spacesData[0].assets.find(asset => asset.id === assetId).temperature;

    return {
      ...newTemperatureData,
      value: newTemperature,
    }
  } catch (error) {
    console.error('Erro ao atualizar o arquivo bd.json:', error);
  }
}

module.exports = { getTemperatureByAssetId, updateTemperatureByAssetId };
