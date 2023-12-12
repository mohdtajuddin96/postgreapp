const { Pool,Client } = require('pg')
const createError = require('http-errors')

const poolConfig = { max: 5, min: 2, idleTimeoutMillis: 600000 }
const DataBase = 'ems_pg_db'
const UserName = 'ems_pg_db_user'
const Password = 'GOucjjRTqNJrIGtp2SEIR0viSx5DafyM'
const Host = 'dpg-clrvo3bip8as73a195o0-a.singapore-postgres.render.com'
const Port = 5432

poolConfig.connectionString = `postgres://${UserName}:${Password}@${Host}:${Port}/${DataBase}`

const db = new Pool(poolConfig)

db.connect(function(err) {
    if (err) createError.InternalServerError(err.message)
    console.log("Database Connected!");
  });

module.exports = db