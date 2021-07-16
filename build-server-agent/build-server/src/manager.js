
const chengeAgentStatus = require("./api/utils/chengeAgentStatus")
const getBuildLIst = require("./controllers/getBuildLIst")
const getSettings = require("./controllers/getSettings")
const giveWork = require("./controllers/giveWork")
const state = require("./state")

getSortData = async (data) => {
    return data.filter(item => item.status === 'Waiting')
}
const manager = async (time) => {
    clearInterval(time);
    const settings = await getSettings()
    state.settings = settings

    const buildList = await getBuildLIst()
    soretResult = await getSortData(buildList.data)

    if (soretResult.length) {
        state.data = soretResult
        if (state.agents.freeAgents.length > 0) {
            const agent = state.agents.freeAgents[0]
            giveWork(agent, state.data[state.data.length - 1], state.settings)
            chengeAgentStatus({
                agent,
                status: 'inWork',
                port: 0
            })
        } else {
            console.log('weiting1')

        }
    } else {
        interval()
    }
}




const interval = () => {
    const time = setInterval(() => {
        manager(time)
    }, 100000)
}

module.exports = manager

