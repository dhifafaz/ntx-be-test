const Pool = require("pg").Pool;
const config = require("../config/db");

const pool = new Pool({
	user: config.USER,
	host: config.HOST,
	database: config.DB,
	password: config.PASSWORD,
	port: config.PORT,
	dialect: config.dialect,
	operatorsAliases: false,
	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

module.exports = pool;