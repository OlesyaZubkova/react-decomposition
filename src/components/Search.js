import React from "react";
import SearchList from "./SearchList";

// поиск

const Search = ({ titles }) => {
  return (
    <>
      <SearchList links={titles} />
      <div className="input">
        <input type="text" placeholder="Search..." />
        <div className="ui button">
          <span>Найдется все. Например,</span> {"фаза луны сегодня"}
        </div>
      </div>
    </>
  );
};

export default Search;
