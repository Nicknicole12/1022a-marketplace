import mysql, { Connection } from 'mysql2/promise'
    class BancoMysql{
        //Atributos de uma classe
        connection:Connection|null = null
        //Métodos
        async criarConexao(){
                this.connection = await mysql.createConnection({
                    host: process.env.dbhost ? process.env.dbhost : "localhost",
                    user: process.env.dbuser ? process.env.dbuser : "root",
                    password: process.env.dbpassword ? process.env.dbpassword : "",
                    database: process.env.dbname ? process.env.dbname : "banco1022a",
                    port: process.env.dbport ? parseInt(process.env.dbport) : 3306
                })
            }
            async consultar(quey:string,params?:any[]){
                if(!this.connection) 
                    throw new Error(" Erro de conexão com o banco de dados.")
                const [result, fields] = await this.connection.query("SELECT * from produtos")
            }
  
             async FinalizarConexao(){
                if(!this.connection) 
                    throw new Error(" Erro de conexão com o banco de dados.")
                await this.connection.end()
            }
            }

            export default BancoMysql
        
    