
const axios = require('axios');
const config = require('../config');

// отправка сообщения серверу о начале выполнения работы
const postStartProcess = async (port) => {
    try {
        console.log('AGENT --- запрос о начале установки отправлен')
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

module.exports = postStartProcess;