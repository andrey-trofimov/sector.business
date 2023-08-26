import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShownPosts, setFieldName } from "../../../redux/slice/viewSlice";
import "./style.scss";

function TableHeader(props) {
  let { title, columnName } = props;
  let { shownPosts, fieldName, searchText } = useSelector(
    (state) => state.view
  );
  let dispatch = useDispatch();

  let [style, setStyle] = useState("none");
  let [sortDirection, setSortDirection] = useState(1);

  // назначаем первоначальное состояние первой колонки
  useEffect(() => {
    if (columnName === "id") {
      setSortDirection(-1);
      setStyle("forward");
    }
  }, []);

  function resetComponent() {
    setStyle("none");
    setSortDirection(1);
  }

  useEffect(() => {
    if (columnName !== fieldName) resetComponent();
  }, [fieldName]);

  useEffect(() => {
    resetComponent();
  }, [searchText]);

  function byName(fieldName) {
    return (a, b) =>
      a[fieldName] > b[fieldName] ? sortDirection : sortDirection * -1;
  }

  function sort() {
    let sortedPosts = [...shownPosts];
    sortedPosts.sort(byName(columnName));
    dispatch(setShownPosts(sortedPosts));
  }

  let changeSortDirection = () => setSortDirection(sortDirection * -1);

  function changeStyle(key) {
    switch (key) {
      case 1:
        setStyle("forward");
        break;

      case -1:
        setStyle("reverse");
        break;

      default:
        setStyle("none");
        break;
    }
  }

  function handlerClick() {
    if (fieldName !== columnName) {
      dispatch(setFieldName(columnName));
    }
    sort();
    changeSortDirection();
    changeStyle(sortDirection);
  }

  return (
    <div className="TabelHeader">
      <h4 className={style} onClick={handlerClick}>
        {title}
      </h4>
    </div>
  );
}

export default TableHeader;
