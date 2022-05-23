const mongoose = require('mongoose');

const CollectionsSchema = new mongoose.Schema({
    collectionname: {
        type: String,
        required: true
    },
    endpoint: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('collections', CollectionsSchema);
