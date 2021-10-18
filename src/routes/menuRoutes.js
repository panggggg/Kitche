module.exports = (app) => {
    const menuList = require('../controllers/menuListController')

    app.route('/menus')
    .get(menuList.list_all_menu)
    .post(menuList.create_a_menu)

    app.route('menus/:menuId')
    .get(menuList.read_a_menu)
} 