import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setPosts,
  setCurrentPage,
  setShownPosts,
} from "../../redux/slice/viewSlice";

import "./style.scss";
import Search from "../Search";
import Nav from "../Nav";
import Table from "../Table";

function App() {
  let { posts, shownPosts, searchText } = useSelector((state) => state.view);
  let dispatch = useDispatch();

  // Загрузка первоначальных данных
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((response) => {
        let data = response.json();
        return data;
      })
      .then((data) => {
        dispatch(setPosts(data));
        dispatch(setShownPosts(data));
      })
      .catch(console.error);
  }, []);

  // Формирование массива резкльтатов поиска
  useEffect(() => {
    if (searchText === "") dispatch(setShownPosts(posts));

    if (searchText !== "") {
      let searchResult = posts.filter((post) => {
        return (
          post["title"].includes(searchText) ||
          post["body"].includes(searchText)
        );
      });
      dispatch(setShownPosts(searchResult));
    }
  }, [searchText]);

  // Сброс пагинации для новых результатов поиска
  useEffect(() => {
    dispatch(setCurrentPage(0));
  }, [shownPosts]);

  return (
    <div className="App">
      <Search />
      <Table />
      <Nav />
    </div>
  );
}

export default App;
