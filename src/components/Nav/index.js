import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slice/viewSlice";
import "./style.scss";
import Button from "../Button";
import Pagination from "./Pagination";

function Nav() {
  let { currentPage, postsPerPage, shownPosts } = useSelector(
    (state) => state.view
  );
  let dispatch = useDispatch();

  let totalPages =
    shownPosts.length % postsPerPage === 0
      ? shownPosts.length / postsPerPage - 1
      : (shownPosts.length - (shownPosts.length % postsPerPage)) / postsPerPage;

  function flipPage(direction) {
    let newPage = currentPage + direction;
    let page = 0;

    if (newPage < 0) page = totalPages;
    if (newPage > totalPages) page = 0;
    if (newPage > -1 && newPage < totalPages + 1) page = newPage;

    dispatch(setCurrentPage(page));
  }

  return (
    <nav className="Nav">
      <Button title={"Назад"} cb={() => flipPage(-1)} />
      <Pagination totalPages={totalPages} />
      <Button title={"Вперед"} cb={() => flipPage(1)} />
    </nav>
  );
}

export default Nav;
