import requests
from flask import Flask, render_template, url_for, request, redirect

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/english-dictionary", methods=["POST", "GET"])
def dictionary():
    if request.method == "POST":
        defi = request.form["word"]
        api_url = f' https://api.dictionaryapi.dev/api/v2/entries/en/{defi}'
        word_data = requests.get(api_url).json()
        a = word_data[0]
        b = a['meanings']
        c = b[0]
        d = c['definitions']
        e = d[0]
        f = e['definition']
        return render_template("dictionary.html", definition=f, defi=defi)
    return render_template("dictionary.html")

@app.route("/<word>")
def word_test(word):
    return f"<h1>{word}</h1>"


@app.route("/calculator")
def calc():
    return render_template("calculator.html")

if __name__ == '__main__':
    app.run(debug=True)
