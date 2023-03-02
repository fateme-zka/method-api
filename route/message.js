const router = require("express").Router({ mergeParams: true });

const requestHandler = require("../middleware/requestHandler");

const postController = require("../controller/message/post");

router.post("/", requestHandler(postController));

module.exports = router;
