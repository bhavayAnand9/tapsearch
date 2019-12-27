const esClient = require('./initES');
const config = require('../config');
const clearES = async() => {
    try {
        return await esClient.deleteByQuery({
            index: config.INDEX,
            body: {
                "query": {
                    "match_all": {}
                }
            }
        });
    } catch (e) {
        throw e;
    }
};

module.exports = clearES;
