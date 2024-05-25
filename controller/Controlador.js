import  conexao from "../bd.js"

let avaliacoes
let compras
let hamburs
let users

class controlador{

    criarCadastro(req,res){
        const nome=req.body.nome;
        const email=req.body.email;
        const password=req.body.password;
        const numero=req.body.numero;
        const sql=`insert into users(nome,email,password,numero) 
        values('${nome}','${email}','${password}','${numero}')`;
        conexao.query(sql,function (erro,result){
            if(erro){
                console.log("Tem erro " + erro);
            }else{
                console.log("passou com sucesso"+result);
                res.render("login/login");
            }
        })
    }

    login(req,res){
        const nome = req.body.nome
        const senha = req.body.senha
        const sql = `select * from users where nome='${nome}' and password='${senha}'`
        const sqladmin = `select * from admin where nome='${nome}' and senha='${senha}'`
        conexao.query(sql,(erro,resultado)=>{
            if(erro)
                console.log(erro)
            else if(resultado == 0){
                conexao.query(sqladmin,(erro,resultado)=>{
                    if(erro)
                        console.log(erro)
                    else{
                        const sql = `select * from users`
                        conexao.query(sql,(erro,resultado)=>{
                            if (erro){
                                console.log(erro)
                            }else{
                             users = resultado
                                const sql = `select * from hamburs`
                                conexao.query(sql,(erro,resultado)=>{
                                    if (erro){
                                        console.log(erro)
                                    }else{
                                        hamburs = resultado
                                        const sql = `select * from avaliacoes`
                                        conexao.query(sql,(erro,resultado)=>{
                                            if (erro){
                                                console.log(erro)
                                            }else{
                                                avaliacoes  = resultado
                                                const sql = `select * from compras`
                                                conexao.query(sql,(erro,resultado)=>{
                                                    if (erro){
                                                        console.log(erro)
                                                    }else{
                                                        compras = resultado
                                                        res.render("dashAdmin/DashAdmin")
                                                    }

                                                })
                                            }

                                        })
                                    }

                                })

                            }
                        })

                    }
                })
            }else{
                res.render("dashUser/DashUsers")
            }
        })
    }

    hamburguer(req,res){
        const nome=req.body.nome;
        const detalhe=req.body.detalhe;
        const preco=req.body.preco;
        const sql=`insert into hamburs(nome,detalhe,preco) 
        values('${nome}','${detalhe}','${preco}')`;
        conexao.query(sql,function (erro,result){
            if(erro){
                console.log("Tem erro " + erro);
            }else{
                console.log("passou com sucesso"+result);
                res.render("dashAdmin/DashAdmin");
            }
        })
    }

}
export default  new controlador