const http = require('http');

const requestListener = (request, response) => {
    //req, res are streams!
    response.write('Hello Node\n');
    response.end();
}

//We do not call the function requestListener inside createServer,
//we just make a reference to it. NEVER call the function like the following:
//createServer(requestListener()). requestListener should just be a reference,
//NOT a function call
const server = http.createServer(requestListener);

server.listen(4242, () => {
    console.log('Server is running');
})