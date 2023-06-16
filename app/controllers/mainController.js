const pool = require("../models/poolDB");

exports.getUsers = (req, res) => {
	pool.query("SELECT * FROM users", (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).send({
			statusCode: 200,
			success: true,
			data: results.rows,
		});
	});
};

exports.addUser = (req, res) => {
	const {
		digits,
		fotoUrl,
		workType,
		positionTitle,
		lat,
		lon,
		company,
		dovote,
		dosurvey,
		dofeedback,
		fullname,
		cuurentLeave,
		roleId,
		isLogin,
	} = req.body;
	pool.query(
		"INSERT INTO users (digits, fotoUrl, workType, positionTitle, lat, lon, company, dovote, dosurvey, dofeedback, fullname, cuurentLeave, roleId, isLogin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12, $13, $14)",
		[
			digits,
			fotoUrl,
			workType,
			positionTitle,
			lat,
			lon,
			company,
			dovote,
			dosurvey,
			dofeedback,
			fullname,
			cuurentLeave,
			roleId,
			isLogin,
		],
		(err, results) => {
			if (err) {
				throw err;
			}
			res.status(200).send({
				statusCode: 200,
				success: true,
				data: results.rows,
			});
		}
	);
};
