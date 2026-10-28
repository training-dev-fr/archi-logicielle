const {validateNewUser} = require('./service.js');
const {writeUser} = require('./model.js');
const {formatRes} = require('./abstract-vue.js');

exports.createUser = (req, res) => {
    try {
        const validation = validateNewUser(req.body);
        if (validation.status != "ok") {
            const data = formatRes(res,validation.substr(0, 1).toUpperCase() + validation.substr(1) + " is required")
            res.writeHead(400);
            return res.end(data);
        }
        const result = writeUser(req.body);
        const data = formatRes(res,{result});
        res.writeHead(201);
        return res.end(data);
    } catch (e) {
        console.error(e);
        res.writeHead(500);
        return res.end("Unknown error");
    }
}