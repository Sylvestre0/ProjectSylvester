import { DataType,DataTypes,Model } from "sequelize";
import sequelize from "../config/config";

class User extends Model {
    public id!: number;
    public gmail!: string;
    public nome!: string;
    public cpf!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey: true,
    },
    gmail:{
        type:DataTypes.STRING(100),
        allowNull: false,  
    },
    nome:{
        type:DataTypes.STRING(100),
        allowNull: false,
    },
    cpf:{
        type: DataTypes.STRING(15),
        allowNull: false, 
    }
},{
sequelize,tableName:"nome_da_table",
})