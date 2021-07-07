const router = require("express").Router(),
    mainRoutes = require("./mainRoutes");

    router.use("/", mainRoutes);

module.exports = router;