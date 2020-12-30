import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postMovie, setPostMovie] = useState({
    title: "",
    description: "",
    starting: "",
    moreDes: "",
    watchOffline: "",
    movieIs: "",
    audio: "",
    subtitles: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postMovie));
    clear();
  };

  const clear = () => {
    setPostMovie({
      title: "",
      description: "",
      starting: "",
      moreDes: "",
      watchOffline: "",
      movieIs: "",
      audio: "",
      subtitles: "",
      selectedFile: "",
    });
  };

  return (
    <div className="form-container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <form onSubmit={handleSubmit}>
        <h2>
          <span>C</span>reating a <span>M</span>ovie
        </h2>
        <label htmlFor="title">Tittle: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={postMovie.title}
          onChange={(e) =>
            setPostMovie({ ...postMovie, title: e.target.value })
          }
          required
          autoFocus
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={postMovie.description}
          onChange={(e) =>
            setPostMovie({ ...postMovie, description: e.target.value })
          }
          required
        />
        <label htmlFor="starting">Starting: </label>
        <input
          type="text"
          name="starting"
          id="starting"
          value={postMovie.starting}
          onChange={(e) =>
            setPostMovie({ ...postMovie, starting: e.target.value })
          }
          required
        />
        <label htmlFor="moreDes">More Description: </label>
        <input
          type="text"
          name="moreDes"
          id="moreDes"
          value={postMovie.moreDes}
          onChange={(e) =>
            setPostMovie({ ...postMovie, moreDes: e.target.value })
          }
          required
        />
        <label htmlFor="watchOffline">Watch Offline: </label>
        <input
          type="text"
          name="watchOffline"
          id="watchOffline"
          value={postMovie.watchOffline}
          onChange={(e) =>
            setPostMovie({ ...postMovie, watchOffline: e.target.value })
          }
          required
        />
        <label htmlFor="movieIs">Movie Is: </label>
        <input
          type="text"
          name="movieIs"
          id="movieIs"
          value={postMovie.movieIs}
          onChange={(e) =>
            setPostMovie({ ...postMovie, movieIs: e.target.value })
          }
          required
        />
        <label htmlFor="audio">Audio: </label>
        <input
          type="text"
          name="audio"
          id="audio"
          value={postMovie.audio}
          onChange={(e) =>
            setPostMovie({ ...postMovie, audio: e.target.value })
          }
          required
        />
        <label htmlFor="subtitles">Subtitles: </label>
        <input
          type="text"
          name="subtitles"
          id="subtitles"
          value={postMovie.subtitles}
          onChange={(e) =>
            setPostMovie({ ...postMovie, subtitles: e.target.value })
          }
          required
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostMovie({ ...postMovie, selectedFile: base64 })
            }
          />
        </div>

        <input type="submit" value="Add Movie" />
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
