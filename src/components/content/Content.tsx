import Filter from "./filter/Filter";
import "./Content.scss";
import Posts from "./posts/Posts";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { FilterType } from "../utils";

const Content = () => {
  const [filterType, setFilterType] = useState<FilterType>(FilterType.Hot);
  return (
    <div className="content">
      <Filter filterType={filterType} toggleFilterType={setFilterType} />
      <Posts filterType={filterType} />
    </div>
  );
};

export default Content;
