from flask import Flask, render_template, request, redirect, url_for, flash
import requests

API_KEY = "16f03e335da07d1b33950f2b167af03c"
BASE_URL = "https://api.themoviedb.org/3"
IMG_BASE = "https://image.tmdb.org/t/p/w500"


app=Flask(__name__)
@app.route("/")
def home():
    response = requests.get(
        f"{BASE_URL}/movie/popular", params={"api_key": API_KEY, "language": "ro-RO"}
    )

    if response.status_code != 200:
        return f"Eroare API: {response.status_code} - {response.text}"

    movies = response.json()["results"]
    return render_template("main.html", movies=movies)


if __name__=="__main__":
    app.run(debug=True)
