const router = require("express").Router({ mergeParams: true });

router.use("/user", require("./user"));
router.use("/festival", require("./festival"));
router.use("/gallery", require("./gallery"));
router.use("/news", require("./news"));
router.use("/workshop", require("./workshop"));
router.use("/course", require("./course"));
router.use("/teacher", require("./teacher"));
router.use("/contact", require("./contact"));

module.exports = router;
