import { createContext, ReactNode, useContext, useState } from "react";

type MoviesProviderProps = {
  children: ReactNode;
};

type FavMoviesItem = {
  id: number;
  count: number;
};

type FavMoviesContext = {
  handleSelectedMovieClick: (id: number) => number;
  // increaseMovieCount: (id: number) => void;
  // decreaseMovieCount: (id: number) => void;
  // removeFromFavMovie: (id: number) => void;
};

const MoviesContext = createContext({} as FavMoviesContext);

export function useFavMovies() {
  return useContext(MoviesContext);
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [favMovies, setFavMovies] = useState<FavMoviesItem[]>([]);

  function getFavMovieCount(id: number) {
    return favMovies.find((movie) => movie.id === id)?.count || 0;
  }
  function handleSelectedMovieClick(id: number) {
    console.log(id);
    console.log(favMovies);
    return id;

    // return favMovies.find((movie) => {
    //   if (movie.id === id) {
    //     console.log("matched");
    //     console.log(movie.count, movie.id);
    //   } else {
    //     console.log(movie.count, movie.id);
    //   }
    // });
    // return favMovies.find((movie) => movie.id === id)?.count || 0;
  }
  function increaseMovieCount(id: number) {
    setFavMovies((currMovie) => {
      if (currMovie.find((movie) => movie.id === id) == null) {
        return [...currMovie, { id, count: 1 }];
      } else {
        return currMovie.map((movie) => {
          if (movie.id === id) {
            return { ...movie, count: movie.count + 1 };
          } else {
            return movie;
          }
        });
      }
    });
  }
  function decreaseMovieCount(id: number) {
    setFavMovies((currMovie) => {
      if (currMovie.find((movie) => movie.id === id)?.count === 1) {
        return currMovie.filter((movie) => movie.id !== id);
      } else {
        return currMovie.map((movie) => {
          if (movie.id === id) {
            return { ...movie, count: movie.count - 1 };
          } else {
            return movie;
          }
        });
      }
    });
  }
  function removeFromFavMovie(id: number) {
    setFavMovies((currMovie) => {
      return currMovie.filter((movie) => movie.id != id);
    });
  }
  return (
    <MoviesContext.Provider
      value={{
        handleSelectedMovieClick,
        // getFavMovieCount,
        // increaseMovieCount,
        // decreaseMovieCount,
        // removeFromFavMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
