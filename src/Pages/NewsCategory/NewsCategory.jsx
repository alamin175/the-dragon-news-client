import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import moment from "moment";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import usetitle from "../../hooks/usetitle";

const NewsCategory = ({ category }) => {
  const [bookmark, setbookmark] = useState([]);
  usetitle("Category");
  const { _id, title, total_view, author, details, rating, image_url } =
    category;

  // const handlebookmark = (value) => {
  //   const newbookmark = [...bookmark, value];
  //   setbookmark(newbookmark);
  //   console.log(newbookmark);
  // };
  return (
    <div>
      <Card className="mb-4 ">
        <Card.Header>
          <div className="d-flex align-items-center">
            <Image style={{ height: 40 }} src={author.img} roundedCircle />
            <div className="flex-grow-1 mx-2">
              <p className="mb-0">{author.name} </p>
              <span>
                <small>
                  {moment(author.published_date).format("YYYY-M-D")}
                  {/* {author.published_date}{" "} */}
                </small>
              </span>
            </div>
            <div className="fs-3">
              <button>
                <CiBookmark></CiBookmark>
              </button>
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details} </>
            ) : (
              <>
                {details.slice(0, 250)} ...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>{" "}
              </>
            )}{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex text-muted">
          <div className="flex-grow-1">
            <Rating
              className="mx-2"
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
            {rating.number}
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCategory;
