const {toXml} = require('./vue-xml.js');

exports.formatRes = (res,data) => {
    res.setHeader('Content-Type','application/xml');
    return toXml(data);
}