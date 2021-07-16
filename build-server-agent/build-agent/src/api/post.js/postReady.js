
const axios = require('axios');
const config = require('../config');
const args = process.argv.slice(2);
const port = args[0] || 3005;

// отправка сообщения серверу о готовности к работе
const postReady = async () => {
    const data = {
        port: port,
        handler: '/build'
    }
    try {
        console.log('AGENT --- запрос на регистрацию к билд серверу отправлен')
        const response = await axios.post(`/notify_agent`, data, config);
        if (response.data.statusCode === 200) {
            console.log('AGENT --- зарегистрировался успешно')
        } else {
            // console.log('response', response.data.text)
        }
    } catch (error) {
        console.log('AGENT --- ошибка регистрации у билд сервера')
        console.log(error);
    }
}

module.exports = postReady;