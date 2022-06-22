const config = require("./config");

/**
 * Array with allowed exact routes that do not require authorization check
 * @type {string[]}
 */
const allowedExactRoutes = [
    '/'
]

/**
 * A simple middleware that prevents unauthorized access to the server.
 * Feel free to modify it as needed.
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    if(allowedExactRoutes.includes(req.path)) {
        next();
    } else {
        if (req.header("Authorization")) {
            const bearer = req.header("Authorization").replace("Bearer ", "");
            if (bearer !== config.bearer) {
                res.status(401).send("Not allowed!");
            } else {
                next();
            }
        } else {
            res.status(401).send("Not allowed!");
        }
    }
}