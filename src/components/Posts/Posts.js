import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import { useSelector, useDispatch } from "react-redux";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import FileBase from "react-file-base64";
import { updateMoviePost } from "../../actions/posts";
import { getPosts } from "../../actions/posts";
const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  const [movie, setMovie] = useState("");

  const [updateMovie, setUpdateMovie] = useState({
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

  // const dispatch = useDispatch();

  const openModal = (movie) => {
    setMovie(movie);
    setUpdateMovie({
      ...updateMovie,
      title: movie.title,
      description: movie.description,
      starting: movie.starting,
      moreDes: movie.moreDes,
      watchOffline: movie.watchOffline,
      movieIs: movie.movieIs,
      audio: movie.audio,
      subtitles: movie.subtitles,
      selectedFile: movie.selectedFile,
    });
  };

  const closeModal = () => {
    setMovie(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMoviePost(movie._id, updateMovie));

    window.location = "/";
  };

  return (
    <div className="posts-container">
      <h1>More TV Shows & Movies</h1>
      <Fade left cascade>
        <div className="posts-list">
          {!posts.length ? (
            <p>Loading...</p>
          ) : (
            posts.map((post) => (
              <div key={post._id}>
                <Post post={post} openModal={openModal} />
              </div>
            ))
          )}
        </div>
      </Fade>
      {movie && (
        <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <div id="movie-details">
              <h2>Update {movie.title}</h2>
              <img src={updateMovie.selectedFile} alt={updateMovie.title} />
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Tittle: </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={updateMovie.title}
                  onChange={(e) =>
                    setUpdateMovie({ ...updateMovie, title: e.target.value })
                  }
                  required
                  autoFocus
                />
                <label htmlFor="description">Description: </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={updateMovie.description}
                  onChange={(e) =>
                    setUpdateMovie({
                      ...updateMovie,
                      description: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="starting">Starting: </label>
                <input
                  type="text"
                  name="starting"
                  id="starting"
                  value={updateMovie.starting}
                  onChange={(e) =>
                    setUpdateMovie({ ...updateMovie, starting: e.target.value })
                  }
                  required
                />
                <label htmlFor="moreDes">More Description: </label>
                <input
                  type="text"
                  name="moreDes"
                  id="moreDes"
                  value={updateMovie.moreDes}
                  onChange={(e) =>
                    setUpdateMovie({ ...updateMovie, moreDes: e.target.value })
                  }
                  required
                />
                <label htmlFor="watchOffline">Watch Offline: </label>
                <input
                  type="text"
                  name="watchOffline"
                  id="watchOffline"
                  value={updateMovie.watchOffline}
                  onChange={(e) =>
                    setUpdateMovie({
                      ...updateMovie,
                      watchOffline: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="movieIs">Movie Is: </label>
                <input
                  type="text"
                  name="movieIs"
                  id="movieIs"
                  value={updateMovie.movieIs}
                  onChange={(e) =>
                    setUpdateMovie({ ...updateMovie, movieIs: e.target.value })
                  }
                  required
                />
                <label htmlFor="audio">Audio: </label>
                <input
                  type="text"
                  name="audio"
                  id="audio"
                  value={updateMovie.audio}
                  onChange={(e) =>
                    setUpdateMovie({ ...updateMovie, audio: e.target.value })
                  }
                  required
                />
                <label htmlFor="subtitles">Subtitles: </label>
                <input
                  type="text"
                  name="subtitles"
                  id="subtitles"
                  value={updateMovie.subtitles}
                  onChange={(e) =>
                    setUpdateMovie({
                      ...updateMovie,
                      subtitles: e.target.value,
                    })
                  }
                  required
                />
                <div>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setUpdateMovie({ ...updateMovie, selectedFile: base64 })
                    }
                  />
                </div>

                <input type="submit" value="Update Movie" />
              </form>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Posts;
