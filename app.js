import  express from 'express';
import  bodyPerses from 'body-parser';
import routes from './router.js';

const app=express();
app.use(express.json());
app.use(bodyPerses.urlencoded({extended:true}));
app.use(bodyPerses.json());
app.use('/css',express.static('public/css'));
app.use('/js',express.static('public/js'));
app.use('/img',express.static('public/img'));
//views
app.use('/home',express.static('views/home'));
app.use('/cadastro',express.static('views/cadastro'));
app.use('/acerca',express.static('views/acerca'));
app.use('/cardapio',express.static('views/cardapio'));
app.use('/localizacao',express.static('views/localizacao'));
app.use('/login',express.static('views/login'));
app.use('/more',express.static('views/more'));
app.use('/reclames',express.static('views/reclames'));
app.use('/dashUsers',express.static('views/dashUsers'));
app.use('/dashAdmin',express.static('views/dashAdmin'));
app.set('view engine','ejs');
app.use(routes)

app.listen(8000,function(){
    console.log("servidor rodando no endereco :http://localhost:"+8000)
})

