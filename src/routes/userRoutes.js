module.exports = (app) => {
    const userList = require('../controllers/userController')

    app.route('/user')
    .get(userList.list_all_user)
    .post(userList.create_a_user)

    app.route('/user/:userId')
    .get(userList.read_a_user)
}