const { exampleMiddleware } = require("../middleware");
const exampleController = require("../controllers/exampleController");
const mainController = require("../controllers/mainController");

module.exports = (app) => {
	app.use((req, res, next) => {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	const router = require("express").Router();

	router.get(
		"/users",
		// [exampleMiddleware.exampleMiddleware],
		mainController.getUsers
	);

	router.post(
		"/add-user",
		// [exampleMiddleware.exampleMiddleware],
		mainController.addUser
	);

	app.use("/api/data", router);
};
