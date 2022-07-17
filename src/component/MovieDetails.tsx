import { ReactComponentElement } from "react";
import { Button, Card } from "react-bootstrap";
import { useFavMovies } from "../context/MoviesContext";

type MovieDetailsProps = {
  id: number;
  title: string;
  genres: string;
  posterurl: string;
};
const handleClick = (id: number) => {
  console.log(id);
};

const MovieDetails = ({ id, title, genres, posterurl }: MovieDetailsProps) => {
  const { handleSelectedMovieClick } = useFavMovies();

  const fav = true;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={posterurl}
        height="200px"
        style={{
          objectFit: "cover",
        }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-0">{title}</span>
        </Card.Title>
        <div className="mt-auto">
          {!fav ? (
            <Button className="w-100" variant="outline-primary">
              {" "}
              Add to Favorite
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".6rem" }}
            >
              <Button
                className="w-100"
                onClick={() => handleSelectedMovieClick(id)}
                variant="outline-danger"
              >
                Remove from Favorite
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default MovieDetails;
