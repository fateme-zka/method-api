const router = require("express").Router({ mergeParams: true });

router.use("/festival", require("./festival"));
router.use("/gallery", require("./gallery"));
router.use("/news", require("./news"));
router.use("/workshop", require("./workshop"));
router.use("/message", require("./message"));

module.exports = router;
