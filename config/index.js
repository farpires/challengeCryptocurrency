if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

module.exports = {
    POLYGON: process.env.NODE_POLYGON,
    POLYGON_SOCKET: process.env.NODE_POLYGON_SOCKET,
    ETHEREUM: process.env.NODE_ETHEREUM,
    ETHEREUM_SOCKET: process.env.NODE_ETHEREUM_SOCKET,
}