import json
import os
from flask_cors import CORS
from flask import Flask, request, jsonify


with open("flights.json", "r") as f:  # Load flight data from the JSON file
    flights_data = json.load(f)

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["POST"])
def search_flights():
    data = request.json
    origin = data.get("origin")
    destination = data.get("destination")
    cabin = data.get("cabin")

    # Filter flights based on the provided parameters
    filtered_flights = []
    for flight in flights_data:
        if (
            flight["origin"] == origin
            and flight["destination"] == destination
            and flight["cabin"] == cabin
        ):
            filtered_flights.append(flight)
    response = jsonify(filtered_flights)
    return response


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8888))
    app.run(debug=True, host="0.0.0.0", port=port)
