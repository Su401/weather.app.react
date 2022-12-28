import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Porto",
    temperature: 19,
    date: "Monday 00:00",
    description: "sunny",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/979/979585.png",
    humidity: 61,
    wind: 18
  };

  return (
    <div className="Weather">
      <div className="container">
        <header>
          <div className="row">
            <div className="col-5">
              <h1 id="current-location">{weatherData.city}</h1>
            </div>
            <div className="col-7">
              <form id="search-form" className="mp-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Search city"
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </header>
        <section>
          <div className="row">
            <div className="col-8">
              <div className="current">
                <h3 id="current-time">{weatherData.date}</h3>
                <br />
                <h2>
                  <span className="temperature">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      width="75px"
                      id="icon"
                    />
                    <span id="temp">{weatherData.temperature}</span>
                    <span className="units">
                      <a href="#" id="celsius">
                        ºC
                      </a>
                      |
                      <a href="#" id="fsmth">
                        ºF
                      </a>
                    </span>
                  </span>
                </h2>
                <br />
                <h4>
                  <span id="description">{weatherData.description}</span>
                  <br />
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  <br />
                  Wind: <span id="wind">{weatherData.wind}</span>km/h
                </h4>
              </div>
            </div>
            <div className="col-4" id="forecast"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
