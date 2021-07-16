const axios = require('axios');
const config = require('../config');
const postReady = require('./postReady');

// отправка серверу результат выполненной работы
const postResult = async (result) => {
    const args = process.argv.slice(2);
    const port = args[0] || 3005;
    const data = {
        result,
        port
    }
    try {
        console.log('AGENT --- отправка результатов выполнения задачи на сервер...')
        const response = await axios.post(`/notify-build-result`, data, config);
        if (response.status === 200) {
            console.log('AGENT --- отправка результатов выполнения задачи на сервер выполнена успешно')
            postReady(port)
        }
    } catch (error) {
        console.log('AGENT --- ошибка отправки результатов выполнения задачи на сервер')
        console.log(error);
    }
}

module.exports = postResult