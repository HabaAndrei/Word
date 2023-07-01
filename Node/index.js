const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());

app.post('/salvam', (req, res) => {
  const nume = req.body.nume;
  const text = req.body.text;
  fs.writeFileSync(`./Fisierele_mele/${nume}.txt`, `${text}`);
  console.log('documentul a fost creat');
  res.send('ok')
})

app.get('/luamFisiere', (req, res)=>{
  fs.readdir('./Fisierele_mele', (err, data)=>{
    if(err){
      console.log(err)
    }else{
     // console.log(data);
      res.send(data);
    }
  })
})
app.post('/valorileFisierului', (req, res)=>{
  const numeFisierCerut = req.body.numeButon;
  console.log(numeFisierCerut);
  fs.readFile(`./Fisierele_mele/${numeFisierCerut}`, 'utf-8', (err, data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.send(data);
    }
  })
})


app.listen(5000, ()=>{
  console.log('ascultam la port 5000')
})