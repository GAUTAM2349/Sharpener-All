

const logIncomingRequests = (req, res, next) => {

    console.log( "\n\n a request came ....\n\n");
    next();
    
}

module.exports = { logIncomingRequests };