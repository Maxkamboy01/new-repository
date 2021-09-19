import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Boxstyle,
  FeelsLike,
  FeelsLikeSmall,
  FlexBox,
  ImgBox,
  TempText,
  TextsBox,
  Wrapperstyle,
  Mapstyle,
  DisplayFlex,
  MapBox,
} from "./style";
import Icon from "../../assets/images/cloudy.svg";
import Thermometer from "../../assets/images/thermometer.svg";
import Hightemp from "../../assets/images/increasetemp.svg";
import Lowtemp from "../../assets/images/decreasetemp.svg";
import Humidity from "../../assets/images/humidity.svg";
import Windspeed from "../../assets/images/windspeed.svg";
import Latitude from "../../assets/images/latitude.svg";
import Longitude from "../../assets/images/longitude.svg";

function Mainpage() {
  const [weather, setweather] = useState({});

  const [state, setstate] = useState([]);

  const newDate = new Date(Date.now());
  const getmonth = newDate.getMonth();
  const getyear = newDate.getFullYear();
  const getday = newDate.getDate();

  const monthSwitch = (monthInNumber) => {
    switch (monthInNumber) {
      case 0:
        return "January ";
      case 1:
        return "February ";
      case 2:
        return "March ";
      case 3:
        return "April ";
      case 4:
        return "May ";
      case 5:
        return "June ";
      case 6:
        return "July ";
      case 7:
        return "August ";
      case 8:
        return "September ";
      case 9:
        return "October ";
      case 10:
        return "November ";
      case 11:
        return "December ";
      default:
        break;
    }
  };

  const getPlace = () => {
    const apiKey = "4b795612d32ec836d583d2df6c2575eb";
    const lat = weather?.coord?.lat;
    const lon = weather?.coord?.lon;
    let cityName = document.getElementById("input").value;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey +
      "&lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric";

    axios.get(url).then((res) => {
      console.log(res);
      setweather(res.data);
      setstate(res.data?.weather);
    });
  };

  useEffect(() => {
    getPlace();
  }, []);



  const Icon = state?.map((value) => {
    return value.icon;
  });

  return (
    <Wrapperstyle>
      <Boxstyle>
        <input
          placeholder="City"
          onChange={getPlace}
          type="text"
          autoFocus
          name="input"
          id="input"
          defaultValue="Angren"
        />

        <div>
          <h2>
            {weather?.name}
            <span style={{ marginRight: "10px", fontSize: "35px" }}>
              {weather?.sys !== undefined ? "," : ""}
            </span>
            {weather?.sys?.country}
            <p>
              {weather?.name != undefined ? monthSwitch(getmonth) : ""}
              {weather.name != undefined ? getday + "," : ""}
              {weather.name != undefined ? " " + getyear : ""}
            </p>
          </h2>
          <FlexBox>
            <ImgBox>
              <img
                id="iconimg"
                src={`http://openweathermap.org/img/wn/${Icon}.png`}
                alt="there is no weather icon here"
              />
              {state.map((station) => (
                <h3 key={station.id}>
                  {station?.main}
                  <p className="h2">{station?.description}</p>
                </h3>
              ))}
            </ImgBox>
            <DisplayFlex>
              <TextsBox>
                <TempText>
                  <span>{weather?.main?.temp} </span>
                  <sup>
                    <i className="fas fa-genderless"></i>
                  </sup>
                  C <br />
                  <span style={{ color: "#aaa", fontSize: "20px" }}>Today</span>
                </TempText>
                <FeelsLike>
                  <div>
                    <img src={Thermometer} alt="" />
                    <span>feels like</span>
                  </div>
                  <span>
                    {weather?.main?.feels_like}{" "}
                    <sup>
                      <i
                        style={{ marginRight: "2px" }}
                        className="fas fa-genderless"
                      ></i>
                    </sup>
                    C
                  </span>
                </FeelsLike>
                <FeelsLike style={{ padding: "0" }}>
                  <FeelsLikeSmall>
                    <div>
                      <img src={Hightemp} alt="" />
                      <span>max temp.</span>
                    </div>
                    <span style={{ fontSize: "14px" }}>
                      {weather?.main?.temp_max}
                      <sup>
                        <i
                          style={{ marginRight: "2px" }}
                          className="fas fa-genderless"
                        ></i>
                      </sup>
                      C
                    </span>
                  </FeelsLikeSmall>
                  <FeelsLikeSmall>
                    <div>
                      <img src={Lowtemp} alt="" />
                      <span>min temp.</span>
                    </div>
                    <span style={{ fontSize: "14px" }}>
                      {weather?.main?.temp_min}{" "}
                      <sup>
                        <i
                          style={{ marginRight: "2px" }}
                          className="fas fa-genderless"
                        ></i>
                      </sup>
                      C
                    </span>
                  </FeelsLikeSmall>
                </FeelsLike>
                <FeelsLike>
                  <div>
                    <img src={Humidity} alt="" />
                    <span>humidity</span>
                  </div>
                  <span>{weather?.main?.humidity + "  "} %</span>
                </FeelsLike>
                <FeelsLike>
                  <div>
                    <img src={Windspeed} alt="" />
                    <span>wind speed</span>
                  </div>
                  <span>{weather?.wind?.speed + "  "} km/h</span>
                </FeelsLike>
              </TextsBox>
              <MapBox>
                <Mapstyle class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      class="gmap_iframe"
                      width="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${weather?.name}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    ></iframe>
                    <a href="https://www.fnfgo.com/">FNF Online Mods</a>
                  </div>
                </Mapstyle>
                <FeelsLike style={{ marginTop: "15px" }}>
                  <div>
                    <img src={Latitude} alt="" />
                    <span>Latitude</span>
                  </div>
                  <span>{weather?.coord?.lat}</span>
                </FeelsLike>
                <FeelsLike style={{ marginTop: "15px" }}>
                  <div>
                    <img src={Longitude} alt="" />
                    <span>Longitude</span>
                  </div>
                  <span>{weather?.coord?.lon}</span>
                </FeelsLike>
              </MapBox>
            </DisplayFlex>
          </FlexBox>
        </div>
      </Boxstyle>
    </Wrapperstyle>
  );
}

export default Mainpage;
