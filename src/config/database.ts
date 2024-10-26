import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://postgres:ZyLQtyLLmeVNmIcIxZWWQiLafdOjoSHz@autorack.proxy.rlwy.net:38056/railway";
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;