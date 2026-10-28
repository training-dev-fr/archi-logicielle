const fs = require('fs');

exports.writeUser = (user) => {
    return fs.appendFileSync("./data/user.json", JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname
    }));
}