import React, { useEffect, useState } from "react";
import "./RowPost.css";
import instance from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [obj, setObj] = useState({});

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    instance.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
    //eslint-disable-next-line
  }, []);

  function handleClick(id) {
    instance
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setObj(response.data.results[0]);
          console.log(obj);
        } else console.log("error");
      });
  }

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="title-head">{props.title}</h2>
      <div className="posters">
        {movies &&
          movies.map((movie, index) =>
            movie.poster_path ? (
              <img
                onClick={() => handleClick(movie.id)}
                key={index}
                className={props.isSmall ? "smallPoster" : "poster"}
                src={` ${imageUrl + movie.poster_path}`}
                alt="cards"
              />
            ) : (
              ""
            )
          )}
      </div>

      {obj.key !== undefined && <YouTube videoId={obj.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
