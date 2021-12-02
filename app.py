# -*- coding: utf-8 -*-
import json
# from models import functions
from flask import Flask
from flask import render_template


app = Flask(__name__, template_folder='templates', static_folder='static')
print('Waiting......')


# 主要逻辑视图函数
@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
def index():
    return render_template('index.html')


@app.route('/error')
def error():
    return '404 not found'


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=173)  #inami
