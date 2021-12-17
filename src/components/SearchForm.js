import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { urlParam, setUrlParam } = useGlobalContext();
  const handleChangeParam = (e) => {
    setUrlParam(e.target.value);
  };

  useEffect(() => {
    setUrlParam("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            id="name"
            name="name"
            value={urlParam}
            onChange={handleChangeParam}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
