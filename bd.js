import mysql from 'mysql';

const conexao=mysql.createConnection({
    host:'localhost',
    password:'',
    user:'root',
    database:'produto',
    port:3306
});

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log("boa connexao");
});

export default  conexao

