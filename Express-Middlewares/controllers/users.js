
const usersGetRequest = (req,res) => {

    res.send("Fetching all users");
    
};



const usersPostRequest = (req,res) => {

    res.send("Adding a new user");
    
}



const usersGetRequestWithParam =  (req,res) => {

    const id = req.params.id;

    
        res.send("Fetching user with id : "+id);
    
};


module.exports = {
    usersGetRequest,
    usersGetRequestWithParam,
    usersPostRequest
};
