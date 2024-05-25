import {Router} from 'express';
import  conexao from "./bd.js";
import controlador from "./controller/Controlador.js"
const routes=new Router();
//routas

routes.get("/",(req,res)=>{
    res.render("home/index")
})

routes.get("/cardapio",(req,res)=>{
    res.render("cardapio/Cardapio")
})

routes.get("/more",(req,res)=>{
    res.render("more/More")
})

routes.get("/localizacao",(req,res)=>{
    res.render("localizacao/Localizacao")
})

routes.get("/acerca",(req,res)=>{
    res.render("home/Acerca")
})

routes.get("/cadastro",(req,res)=>{
    res.render("cadastro/cadastro")
});

routes.post("/cad",controlador.criarCadastro);



routes.get("/reclame",(req,res)=>{
    res.render("reclames/recl")
})

routes.get("/login",(req,res)=>{
    res.render("login/login")
})

routes.get("/users",(req,res)=>{
    res.render("dashUser/DashUsers");
})

routes.post("/logar",controlador.login)
routes.post("/cadhamb",controlador.hamburguer)
export default routes