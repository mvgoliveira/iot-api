const { BD } = require('../bd');

function getEnergiesByAssetId(assetId) {
  const spacesData = BD.spaces;

  const energies = spacesData[0].assets.find(asset => asset.id === assetId).energies;

  return energies;
}

function updateEnergyStateByEnergyId(assetId, energyId, newStatus) {
  const spacesData = BD.spaces;

  const energies = spacesData[0].assets.find(asset => asset.id === assetId).energies;
  
  const energy = energies.find(energy => energy.id === energyId);

  return {
    ...energy,
    status: newStatus,
  };
}

module.exports = { getEnergiesByAssetId, updateEnergyStateByEnergyId };
