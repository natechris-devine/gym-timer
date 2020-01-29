"""
Flask Documentation:     http://flask.pocoo.org/docs/
Jinja2 Documentation:    http://jinja.pocoo.org/2/documentation/
Werkzeug Documentation:  http://werkzeug.pocoo.org/documentation/
This file creates your application.
Heroku Deployment:       https://salty-reaches-37394.herokuapp.com
"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

if __name__ == '__main__':
    # app.run(debug=True, host="0.0.0.0", port=8080)
    app.run(debug=True, host="localhost", port=8080)