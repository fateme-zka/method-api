const router = require("express").Router({ mergeParams: true });

router.use("/user", require("./user"));
router.use("/festival", require("./festival"));
router.use("/gallery", require("./gallery"));
router.use("/workshop", require("./workshop"));
router.use("/course", require("./course"));
router.use("/theater", require("./theater"));
router.use("/contact", require("./contact"));

module.exports = router;
