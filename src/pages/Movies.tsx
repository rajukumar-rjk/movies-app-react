import moviesData from "../data/data.json";
import { Col, Row } from "react-bootstrap";
import MovieDetails from "../component/MovieDetails";

const Movies = () => {
  return (
    <>
      <h3>Movies</h3>
      <Row md={2} xs={1} lg={3} className="g-3">
        {moviesData["movies-coming"].map((item: any) => (
          <Col key={item.id}>
            {/* {JSON.stringify(item)} */}
            <MovieDetails {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Movies;
