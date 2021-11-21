# -*- coding: utf-8 -*-
import time
import json
import config
import sqlite3
from models import functions
from flask import Flask
from flask import request
from flask import render_template
from flask_apscheduler import APScheduler


app = Flask(__name__, template_folder='templates', static_folder='static')
print('Waiting......')


# 主要逻辑视图函数
@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
def index():
    return render_template('index.html')


@app.route('/get_data', methods=["GET", "POST"])
def get_data():
    with open(r'data/test.json', encoding='utf-8') as f:
        data = json.load(f)
        f.close()
    return data


@app.route('/geo_shanghai_json', methods=["GET", "POST"])
def geo_shanghai_json():
    with open(r'data/chinageo.json', encoding='utf_8_sig') as f:
        test_line = json.load(f)
        f.close()
    return test_line


@app.route('/error')
def error():
    return '404 not found'


if __name__ == '__main__':
    scheduler = APScheduler()
    scheduler.init_app(app)
    scheduler.start()
    app.run(host='0.0.0.0', debug=False, port=173)
