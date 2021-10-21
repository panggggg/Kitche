module.exports = (app) => {
    const menuList = require('../controllers/menuListController')
    const userList = require('../controllers/userController')

    app.route('/menus')
    .get(menuList.list_all_menu)
    .post(menuList.create_a_menu)

    app.route('menus/:menuId')
    .get(menuList.read_a_menu)

    app.route('/user')
    .get(userList.list_all_user)
    .post(userList.create_a_user)

} 