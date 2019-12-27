const esClient = require('./initES');
const config = require('../config');

const searchES = async (q) => {
    try{
        return await esClient.search({
            index: config.INDEX,
            body: {
                size: 10,
                from: 0,
                query: {
                    multi_match: {
                        query: q
                    }
                }
            }
        });
    } catch (e) {
        throw e;
    }
};

module.exports = searchES;
