import {Dialect, Sequelize} from "sequelize";
import mysql2 from "mysql2/promise";

const dbconfig={
    database: "loja1",
    username: "root",
    password: "root2",
    options:{
        host: "localhost",
        dialect: "mysql" as Dialect,
        logging: false,
    }
};

async function createDataBase() {
    const conexao = await mysql2.createConnection({
    host: dbconfig.options.host,
    user: dbconfig.username,
    password: dbconfig.password,
});

await conexao.query("Create DataBase if not exists \'${dbconfig.database}\';");
await conexao.end();
}

const sequelize = new Sequelize(dbconfig.database,dbconfig.username,dbconfig.password,dbconfig.options);
export default sequelize;
export {createDataBase};