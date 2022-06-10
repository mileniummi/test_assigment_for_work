import React from "react";

interface FormProps {
  keyword: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFindClick: () => void;
}

const PostSearchForm: React.FC<FormProps> = ({ keyword, handleChange, handleFindClick }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleFindClick();
      }}
      className="posts-search-form"
    >
      <div className="form__input__wrapper">
        <input
          type="text"
          className="form__input"
          placeholder="search keyword"
          name="keyword"
          onChange={handleChange}
          onSubmit={(event) => event.persist()}
        />
        <label className={keyword === "" ? "form__label" : "form__label active"}>search keyword</label>
      </div>
      <button onClick={handleFindClick} type="button" className="form__button posts-search-button">
        Find
      </button>
    </form>
  );
};

export default PostSearchForm;
