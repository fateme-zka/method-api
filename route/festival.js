const router = require("express").Router({ mergeParams: true });

const requestHandler = require("../middleware/requestHandler");

const getAllController = require("../controller/festival/getAll");

router.get("/all", requestHandler(getAllController));

module.exports = router;
