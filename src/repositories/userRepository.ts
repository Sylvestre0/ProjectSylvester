import { Pool } from "pg";
import database from "../config/database";
import { typeUser } from "../models/userModel";

export class UserRepository {
  private database: Pool;

  constructor() {
    this.database = database;
  }

  async addUser(name: string,email: string,passwordHash: string,googleId: string,): Promise<typeUser> {
    const queryText = "INSERT INTO users(name, email, passwordHash, googleId) VALUES($1, $2, $3, $4) RETURNING *";
    const { rows } = await this.database.query(queryText, [name,email,passwordHash,googleId]);
    return rows[0];
  }
  async findPassword(email: string): Promise<String> {
    const queryText = "SELECT passwordHash FROM users WHERE email = $1";
    const { rows } = await this.database.query(queryText, [email]);
    return rows[0].passwordHash;
  }
  async findEmail(email: string): Promise<String> {
    const queryText = "SELECT email FROM users WHERE email = $1";
    const { rows } = await this.database.query(queryText, [email]);
    return rows[0].email;
  }
}
