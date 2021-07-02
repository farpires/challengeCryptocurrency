if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

module.exports = {
    NODE_POLYGON: process.env.NODE_POLYGON,
    NODE_ETHEREUM: process.env.NODE_ETHEREUM,
}