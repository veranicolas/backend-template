import { Pool } from "pg";

const pool = new Pool({
    host:process.env.DB_HOST,
    database:'patitos',
    port:5432,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
})

export { pool }