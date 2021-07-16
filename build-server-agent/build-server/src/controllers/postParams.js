const axios = require('axios');
const config = require('./config');

const postParams = async (data) => {
    console.log('BUILD SERVER --- отпарвка данных о старте...')
        try {
            const response = await axios.post(`/build/start`, data.params, config);
            console.log('BUILD SERVER --- данные о старте успешно добавлены')
        } catch (error) {
            console.log('BUILD SERVER --- ошибка отправки данных данных о старте...')
            console.log(error);
        }
    }
    module.exports = postParams