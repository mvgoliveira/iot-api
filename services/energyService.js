const { BD } = require('../bd');

function getEnergiesByAssetId(assetId) {
  const spaceData = BD.space;

  const energies = spaceData.assets.find(asset => asset.id === assetId).energies;

  return energies;
}

function updateEnergyStateByEnergyId(assetId, energyId, newStatus) {
  const spaceData = BD.space;

  const energies = spaceData.assets.find(asset => asset.id === assetId).energies;
  
  const energy = energies.find(energy => energy.id === energyId);

  return {
    ...energy,
    status: newStatus,
  };
}

module.exports = { getEnergiesByAssetId, updateEnergyStateByEnergyId };
