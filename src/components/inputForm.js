import React from "react";
import { useState } from "react";

const InputForm = (props) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  return (
    <form
      className="input-group w-50 mt-5 m-auto mb-5"
      onSubmit={(e) => {
        e.preventDefault();
        props.getData(search);
      }}
    >
      <input
        type="text"
        className="form-control rounded"
        placeholder="Search"
        autoFocus
        value={search}
        onChange={onChangeSearch}
      />
      <button
        onClick={() => props.getData(search)}
        type="button"
        className="btn btn-outline-primary"
      >
        Search
      </button>
    </form>
  );
};

export default InputForm;
