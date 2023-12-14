import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://the-news-dragon-server-dun-two.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h3>All Categories</h3>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className="mx-4 text-black text-decoration-none"
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
