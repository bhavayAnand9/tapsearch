const config = require('../config');
const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
    hosts: config.ELASTIC_URI
});

module.exports = esClient;
