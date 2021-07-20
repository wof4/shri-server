const config = {
  baseURL: 'https://shri.yandex/hw/api',
  headers: {
    "content-type": "application/json",
    Authorization: process.env.token,

    //в пустую строку нужно втавить кокен в формате 'Bearer хххххххххххх'
    //Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjUzMTk0NTU3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IndvZjQiLCJ1cm46Z2l0aHViOnVybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvd29mNCIsIm5iZiI6MTYyNjI3MjY2OCwiZXhwIjoxNjI4ODY0NjY4LCJpc3MiOiJTaHJpLUlzc3Vlci1UZXN0IiwiYXVkIjoiU2hyaS1BdWRpZW5jZS1UZXN0In0.MlTIs3BSXo2Vsz2u74WnD73kW2qEpV44Y9dxy2UF-O0',
  },
};


export default config

