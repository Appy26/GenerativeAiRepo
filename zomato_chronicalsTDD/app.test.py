import json
import pytest
from flask import app


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_get_all_menus(client):
    response = client.get('/menus')
    assert response.status_code == 200
    menus = json.loads(response.get_data(as_text=True))
    assert len(menus) == 3


def test_create_menu(client):
    new_menu = {"name": "Salad", "price": 7.99}
    response = client.post('/menus', json=new_menu)
    assert response.status_code == 201
    menu = json.loads(response.get_data(as_text=True))
    assert menu["name"] == "Salad"


# Add more test cases for other CRUD operations...


if __name__ == '_main_':
    pytest.main()