from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

# Dummy data for demonstration
menus = [
    {"id": 1, "name": "Pizza", "price": 10.99},
    {"id": 2, "name": "Burger", "price": 5.99},
    {"id": 3, "name": "Pasta", "price": 8.99}
]

orders = [
    {"id": 1, "menu_id": 1, "quantity": 2},
    {"id": 2, "menu_id": 2, "quantity": 1},
    {"id": 3, "menu_id": 3, "quantity": 3}
]


class MenuResource(Resource):
    def get(self):
        return menus

    def post(self):
        new_menu = request.get_json()
        menus.append(new_menu)
        return new_menu, 201


class MenuDetailResource(Resource):
    def get(self, menu_id):
        menu = next((menu for menu in menus if menu["id"] == menu_id), None)
        if menu:
            return menu
        else:
            return {"message": "Menu not found"}, 404

    def put(self, menu_id):
        menu = next((menu for menu in menus if menu["id"] == menu_id), None)
        if menu:
            updated_menu = request.get_json()
            menu.update(updated_menu)
            return updated_menu
        else:
            return {"message": "Menu not found"}, 404

    def delete(self, menu_id):
        menu = next((menu for menu in menus if menu["id"] == menu_id), None)
        if menu:
            menus.remove(menu)
            return {"message": "Menu deleted"}
        else:
            return {"message": "Menu not found"}, 404


class OrderResource(Resource):
    def get(self):
        return orders

    def post(self):
        new_order = request.get_json()
        orders.append(new_order)
        return new_order, 201


class OrderDetailResource(Resource):
    def get(self, order_id):
        order = next((order for order in orders if order["id"] == order_id), None)
        if order:
            return order
        else:
            return {"message": "Order not found"}, 404

    def put(self, order_id):
        order = next((order for order in orders if order["id"] == order_id), None)
        if order:
            updated_order = request.get_json()
            order.update(updated_order)
            return updated_order
        else:
            return {"message": "Order not found"}, 404

    def delete(self, order_id):
        order = next((order for order in orders if order["id"] == order_id), None)
        if order:
            orders.remove(order)
            return {"message": "Order deleted"}
        else:
            return {"message": "Order not found"}, 404


api.add_resource(MenuResource, '/menus')
api.add_resource(MenuDetailResource, '/menus/<int:menu_id>')
api.add_resource(OrderResource, '/orders')
api.add_resource(OrderDetailResource, '/orders/<int:order_id>')


if __name__ == '_main_':
    app.run(debug=True)