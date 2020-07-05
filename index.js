// import TBTC from "./src/TBTC.js"
// import BitcoinHelpers from "./src/BitcoinHelpers.js"
// import EthereumHelpers from "./src/EthereumHelpers.js"

const TBTC = require("./src/TBTC.js")
const BitcoinHelpers = require("./src/BitcoinHelpers.js")
const EthereumHelpers = require("./src/EthereumHelpers.js")


export { BitcoinHelpers, EthereumHelpers }

/** @typedef { import("./src/Deposit.js").default } Deposit */
/** @typedef { import("./src/Redemption.js").default } Redemption */
/** @typedef { import("./src/TBTC.js").TBTC } TBTC */

export default TBTC
