// module.exports = (app) => {
//     const userList = require('../controllers/userController')

//     app.route('/user')
//     .get(userList.list_all_user)
//     .post(userList.create_a_user)

//     app.route('/user/:userId')
//     .get(userList.read_a_user)
// }
const userList = require('../controllers/userController')
import express from 'express'
const router = express.Router()

router.get('/user', userList.list_all_user)
router.post('/user', userList.create_a_user)
router.get('/user/:id', userList.read_a_user)