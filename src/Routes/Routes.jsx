import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
      },
    ],
  },
]);
export default router;
