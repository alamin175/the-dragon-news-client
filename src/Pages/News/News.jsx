import React from "react";
import { useLoaderData } from "react-router-dom";
import usetitle from "../../hooks/usetitle";

const News = () => {
  const { title, author, details, image_url, rating } = useLoaderData();
  usetitle("News");
  return (
    <div>
      <h1>Name: {author.name} </h1>
      <h2 className="my-4">{title} </h2>
      <img style={{ height: 425 }} src={image_url} alt="" />
      <h2 className="mt-4">Performance: {rating.badge} </h2>
      <h6>Published Date: {author.published_date} </h6>
      <p className="mt-4">{details} </p>
    </div>
  );
};

export default News;
