const { BD } = require('../bd');

function getAssetById(assetId) {
    const spacesData = BD.spaces;

    return spacesData[0].assets.find(asset => asset.id === assetId);
}

module.exports = { getAssetById };