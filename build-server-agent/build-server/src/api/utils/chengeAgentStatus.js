const manager = require("../../manager")
const state = require("../../state")
// меняет статус агента
const chengeAgentStatus = (params)=> {
    const {agent, status, port} = params
    console.log('chengeAgentStatus params',params)
    if(status === "inWork"){
        state.agents.inWork.push(agent)
        state.agents.freeAgents.shift()
    }
    else if (status === "freeAgents"){
        state.agents.inWork = state.agents.inWork.filter(item => item.port !== params.port)
    }
}

module.exports = chengeAgentStatus



