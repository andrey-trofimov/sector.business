import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./style.scss";
import TableHeader from "./TableHeader";

function Table() {
  let tableHeader = [
    { title: "id", columnName: "id" },
    { title: "Заголовок", columnName: "title" },
    { title: "Описание", columnName: "body" },
  ];

  let { shownPosts, postsPerPage, currentPage, posts } = useSelector(
    (state) => state.view
  );

  let [tableBody, setTableBody] = useState(shownPosts.slice(0, postsPerPage));

  useEffect(() => {
    setTableBody(
      shownPosts.slice(
        currentPage * postsPerPage,
        (currentPage + 1) * postsPerPage
      )
    );
  }, [currentPage, shownPosts]);

  return (
    <div className="Table">
      {/* Заголовок таблицы */}
      <div className="Table-row">
        {tableHeader.map((element, index) => {
          return (
            <TableHeader
              key={index}
              title={element.title}
              columnName={element.columnName}
            />
          );
        })}
      </div>

      {/* Тело таблицы */}
      {tableBody.map((element) => {
        let { id, title, body } = element;

        return (
          <div className="Table-row" key={id}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
