import React, { useEffect, useState } from "react";
import "./Banner.css";
import instance from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
import randomInteger from "random-int";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    instance
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[randomInteger(20)]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url( ${
          movie ? imageUrl + movie.backdrop_path : ""
        } )`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-btns">
          <button className="button">
            <FaPlay className="icons" /> Play
          </button>
          <button className="button">
            <BsPlusLg className="icons" /> My List
          </button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>

      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
