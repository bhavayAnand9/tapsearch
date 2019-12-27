const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const esClient = require('./elastic-search-utilities/initES');
const path = require('path');
//ping elastic search server
(async () => {
    try{
        await esClient.ping({requestTimeout: 30000});
        console.log('Elasticsearch cluster is up and listening to requests at port 9200');
    } catch(e){
        console.error(e.message);
    }
})();

//middlewares

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/')));

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const tapSearchRoutes = require('./routes/tapSearchRoutes');

app.get('/test', (req, res)=> {
    res.send('1..2..3.. working');
});

app.use('/api', tapSearchRoutes.routes);

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/foodshala-client/index.html'));
});

app.listen(config.PORT, (err) => {
    if(err) throw err;
    else console.log(`Server listening on PORT ${config.PORT}`);
});
