import {DataTypes,Model} from 'sequelize';
import sequelize from '../config/config';

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
    },
}, 
{sequelize,
tableName: 'usuarios',
});

export default User;