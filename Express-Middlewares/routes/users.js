const express = require('express');
const router = express.Router();
const { usersGetRequest, usersGetRequestWithParam, usersPostRequest} = require('../controllers/users');

router.get('/', usersGetRequest )


router.post('/', usersPostRequest  )



router.get('/:id', usersGetRequestWithParam )



module.exports = router;