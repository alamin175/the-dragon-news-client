import { useEffect } from "react";

const usetitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Dragon News`;
  }, [title]);
};
export default usetitle;
