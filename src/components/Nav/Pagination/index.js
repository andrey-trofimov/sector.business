import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/slice/viewSlice";
import "./style.scss";

function Pagination(props) {
  let { totalPages } = props;
  let { currentPage } = useSelector((state) => state.view);
  let dispatsh = useDispatch();

  let halfRange = 2;
  let start = currentPage - halfRange > 0 ? currentPage - halfRange : 0;
  let end =
    totalPages - currentPage > halfRange ? currentPage + halfRange : totalPages;

  if (halfRange * 2 + 1 > totalPages) {
    start = 0;
    end = totalPages;
  }

  if (halfRange * 2 < totalPages) {
    if (currentPage - halfRange < 0 && currentPage + halfRange < totalPages) {
      start = 0;
      end = 2 * halfRange;
    }

    if (currentPage - halfRange > 0 && currentPage + halfRange < totalPages) {
      start = currentPage - halfRange;
      end = currentPage + halfRange;
    }

    if (currentPage - halfRange > 0 && currentPage + halfRange > totalPages) {
      start = totalPages - 2 * halfRange;
      end = totalPages;
    }
  }

  let pageArr = Array.from(
    { length: end - start + 1 },
    (_, i) => i + start + 1
  );

  let style = (el) => (el === currentPage + 1 && "current") || "default";

  function handlerClick(el) {
    dispatsh(setCurrentPage(el - 1));
  }

  return (
    <div className="Pagination">
      {pageArr.map((el, i) => {
        return (
          <span key={el} className={style(el)} onClick={() => handlerClick(el)}>
            {el}
          </span>
        );
      })}
    </div>
  );
}

export default Pagination;
