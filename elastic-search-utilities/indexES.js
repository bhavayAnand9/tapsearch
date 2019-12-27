const esClient = require('./initES');
const config = require('../config');
const indexES = async(para) => {
    try {
        return await esClient.index({
            index: config.INDEX,
            body: {
                "para": para
            }
        });
    } catch (e) {
        throw e;
    }
};

module.exports = indexES;
