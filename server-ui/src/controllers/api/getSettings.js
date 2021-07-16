const axios = require('axios');

const config = require('./config');



const data ={
data:{
  buildCommand: "run build",
  id: "61f1f766-7b8e-4d13-8774-8e0e8302aad1",
  mainBranch: "master |master",
  period: 10,
  repoName: "wof4/tableData",
}

}
module.exports = async (req, res) => {

  if(req.query && req.query.params){
    console.log('test params')
    res.json(data);
  }else{

    try {
      const response = await axios.get('/conf', config);
      res.json(response.data);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  
};
