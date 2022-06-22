/**
 * api version
 */
const version = process.env.npm_package_version;

/**
 * Authentication token
 * @type {string}
 */
const bearer = "BEARER_TOKEN";


module.exports = {
    version: version,
    bearer: bearer
}