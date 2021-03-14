import React, { useEffect, useState } from "react";

//Using REACT_APP_anything is mandatory while creating .env file for react topick them here.
//Addding NASA API KEY in .env file to avoid leaking of key which is unique to each user.
//So once .env fileis created add it to git ignore so that while pushing app to github .env file is ignored.
const apiKey = process.env.REACT_APP_NASA_API_KEY;

const NasaPhoto = () => {
  const [nasaphoto, setNasaphoto] = useState(null);

  useEffect(() => {
    const getAPod = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );

      const photoObject = await response.json();
      setNasaphoto(photoObject);
    };
    getAPod();
  }, []);

  return (
    <div className="nasaphoto">
      {nasaphoto &&
        (nasaphoto.media_type === "image" ? (
          <>
            <img src={nasaphoto.hdurl} alt={nasaphoto.title} />
            <div className="photoDetail">
              <h1>{nasaphoto.title}</h1>
              <h3>{nasaphoto.date}</h3>
              <p>{nasaphoto.explanation}</p>
            </div>
          </>
        ) : (
          <video
            src={nasaphoto.hdurl}
            alt={nasaphoto.title}
            height="600px"
            width="600px"
          ></video>
        ))}
    </div>
  );
};

export default NasaPhoto;
