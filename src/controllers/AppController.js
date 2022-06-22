const app = require('express');
const router = app.Router();

router.get(`/`, async (req, res) => {
    res.send(`Server started. ${new Date()}`);
})

router.get(`/ping`, async (req, res) => {
    res.send(`Pong: ${new Date()}`);
})

module.exports = router;