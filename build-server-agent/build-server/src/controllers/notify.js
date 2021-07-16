const axios = require('axios');
const manager = require('../manager');
const state = require('../state');

checkAgentList = (item) => {
  let presence = false;
  if (state.agents.freeAgents.length > 0) {
    state.agents.freeAgents.forEach((elem) => {
      if (elem.port === item.port) {
        presence = true
      }
    })
  } else if (state.agents.inWork.length > 0) {
    state.agents.inWork.forEach((elem) => {
      if (elem.port === item.port) {
        presence = true
      }
    })
  }
  return presence
}


module.exports = async (req, res) => {
  if (!checkAgentList(req.body)) {
    res.json({statusCode: 200 ,text:'buidAgent --- регистрация принята'});
    state.agents.freeAgents.push(req.body)
    console.log(`агент ${req.body.port} зарегистрировался`, req.body)
    manager()
  } else {
    res.json({statusCode: 1 ,text:'buidAgent --- ошибка,нельзя регистрировать два раза одного агента'});
  }

};
