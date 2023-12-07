import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCategory from "../NewsCategory/NewsCategory";

const Category = () => {
  const categoryData = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      <h1>This is category: {categoryData.length} </h1>
      {categoryData.map((category) => (
        <NewsCategory key={category._id} category={category}></NewsCategory>
      ))}
    </div>
  );
};

export default Category;
