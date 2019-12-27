const indexES = require('../elastic-search-utilities/indexES');
const searchES = require('../elastic-search-utilities/searchES');
const clearES = require('../elastic-search-utilities/clearES');

exports.clear = async (req, res) => {
    try{
        const result = await clearES();
        res.send(result);
    } catch (e) {
        res.send(e);
    }
};

exports.index = async (req, res) => {
    let {para} = req.body;
    para = para.split('\n\n');
    const paraArray = [];
    try{
        const resultArr = [];
        for(let i=0; i<para.length; ++i){
            if(para[i].length > 0){
                resultArr.push(await indexES(para));
            }
        }
        res.send(resultArr);
    } catch (e) {
        res.send(e);
    }
};

exports.search = async (req, res) => {
    const {query} = req.params;
    try{
        const results = await searchES(query);
        res.send(results)
    } catch (e) {
        res.send(e);
    }
};
