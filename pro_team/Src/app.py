# app.py

from flask import Flask, render_template, url_for  # import flask

app = Flask(__name__)  # create an app instance


@app.route('/')  # at the end point /
def home():
    return render_template('index.html')


if __name__ == "__main__":  # on running python app.py
    app.run()  # run the flask app
