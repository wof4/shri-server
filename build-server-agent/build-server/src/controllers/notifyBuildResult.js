
const axios = require('axios');
const chengeAgentStatus = require('../api/utils/chengeAgentStatus');
const state = require('../state');
const config = require('./config');

module.exports = async (req, res) => {
    
    console.log('BUILD SERVER --- отпарвка результатов выполнения операции...')
    try {
        const response = await axios.post(`/build/finish`, req.body.result, config);
        console.log('response.data', response.data)
        console.log('BUILD SERVER --- успешная отпарвка результатов выполнения операции')
    } catch (error) {
        console.log(`BUILD SERVER ---ошибка отпарвки результатов выполнения операции ${error}`)
    }
    chengeAgentStatus({
        agent:{},
        status:'freeAgents',
        port: req.body.port
    })
    res.json('регистрация');
}

