const { BD } = require('../bd');

function getAssets() {
    const spaceData = BD.space;

    return spaceData.assets;
}

function getAssetById(assetId) {
    const spaceData = BD.space;

    return spaceData.assets.find(asset => asset.id === assetId);
}

module.exports = { getAssets, getAssetById };