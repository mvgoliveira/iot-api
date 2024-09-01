const { BD } = require('../bd');

function getAssetById(assetId) {
    const spaceData = BD.space;

    return spaceData.assets.find(asset => asset.id === assetId);
}

module.exports = { getAssetById };