let express = require('express');
const puerto = 80;
let app = express();
app.listen(puerto,() =>{
    console.log("My http server listening on port " + puerto + "...");

});
app.get('/amed',(req,res)=>{
    console.log({"Name":"Amed Nones"});
})