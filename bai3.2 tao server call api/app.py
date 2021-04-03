from math import floor
from random import random

from flask import Flask
from flask_cors import CORS
from flask_restx import Api, Resource

app = Flask(__name__)
CORS(app)
api = Api(app)


def gen_random_color():
    letters = '0123456789ABCDEF'
    color = '#'
    for i in range(6):
        color += letters[floor(random() * 16)]
    return color


@api.route('/gen-color')
class MainClass(Resource):
    @api.response(200, "Success")
    def get(self):
        return {
            "result": gen_random_color()
        }


if __name__ == '__main__':
    app.run(debug=True)
