const Router = (server) => {
    let router = { server };

    router.get = (url, callback) => {
        server.on('request', (req, res) => {
            if (req.method === "GET" && req.url === url) {
                callback(req, res);
            }
        });
    }

    router.post = (url, callback) => {
        server.on('request', (req, res) => {
            if (req.method === "POST" && req.url === url) {
                let body = '';
                req.on('data', (chunk) => {
                    body += chunk;
                });
                req.on('end', () => {
                    req.body = JSON.parse(body);
                    callback(req, res);
                })
            }
        });
    }

    router.put = (url, callback) => {
        server.on('request', (req, res) => {
            if (req.method === "PUT" && req.url === url) {
                let body = '';
                req.on('data', (chunk) => {
                    body += chunk;
                });
                req.on('end', () => {
                    req.body = JSON.parse(body);
                    callback(req, res);
                })
            }
        });
    }

    router.delete = (url, callback) => {
        server.on('request', (req, res) => {
            if (req.method === "DELETE" && req.url === url) {
                callback(req, res);
            }
        });
    }

    return router;
}



module.exports = Router;