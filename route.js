const Router = require('./router.js');
const {createUser} = require('./controller.js');

const route = (server) => {
    const router = Router(server);

    router.get('/', () => {
        console.log('get');
    });

    router.post('/user', createUser);
};

module.exports = route;