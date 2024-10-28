  import { Pool } from 'pg';
  import database from '../config/database';
  import { typeUser } from '../models/userModel';

  export class UserRepository {
    private database: Pool;

    constructor() {
      this.database = database;
    }

    // Método para adicionar um novo usuário
    async addUser(name: string, email: string): Promise<typeUser> {
      const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
      const { rows } = await this.database.query(queryText, [name, email]);
      return rows[0];
    }
  }