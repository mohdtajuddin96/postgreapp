const { Pool } = require('pg')

const poolConfig = { max: 5, min: 2, idleTimeoutMillis: 600000 }
const DataBase = 'postgress_6w6d'
const UserName = 'postgress'
const Password = 'drJbFClhWqnxLUYvs214OVdYHGbBnsyc'
const Host = 'dpg-clrfdcie9h4c73avg0n0-a.oregon-postgres.render.com'
const Port = 5432

poolConfig.connectionString = `postgres://${UserName}:${Password}@${Host}:${Port}/${DataBase}`

const db = new Pool(poolConfig)

module.exports = db