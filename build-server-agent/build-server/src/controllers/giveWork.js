const axios = require('axios');
const postParams = require('./postParams');

const giveWork = async (agent, commit, settings) => {
    const config = {
        baseURL: `http://localhost:${agent.port}`,
        headers: {
            Authorization: process.env.token,
        },
    }
    const data = {
        id: commit.id,
        commitHash: commit.commitHash,
        repoName: settings.repoName,
        command: settings.buildCommand,
        mainBranch: settings.mainBranch
    }
    try {
        const response = await axios.post(`${agent.handler}`, data, config);
        postParams(response.data)
    } catch (error) {
        console.log('AGENT --- ошибка отправки данных для билда')
        console.log(error);
    }
}


module.exports = giveWork