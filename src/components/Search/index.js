import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slice/viewSlice";
import "./style.scss";

function Search() {
  let dispatch = useDispatch();
  let searchInput = useRef();
  let { searchText } = useSelector((state) => state.view);

  function setSearchText() {
    dispatch(setSearch(searchInput.current.value));
  }

  return (
    <div className="Search">
      <input
        type={"text"}
        ref={searchInput}
        placeholder="Поиск"
        value={searchText}
        onChange={setSearchText}
      ></input>
    </div>
  );
}

export default Search;
