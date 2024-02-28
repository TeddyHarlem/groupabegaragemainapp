// Import the mysql2 module Promise Wrapper 
const mysql = require('mysql2/promise');
// Prepare connection parameters we use to connect to the database
const dbConfig = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  socketPath: process.env.DB_SOCKET_PATH,
  connectionLimit: 10,
 
  
}
// Create the connection pool  
const pool = mysql.createPool(dbConfig);
// Log a message to indicate successful database connection
console.log('Database connected successfully!');
// Prepare a function that will execute the SQL queries asynchronously
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}
// Export the query function for use in the application 
module.exports = { query };