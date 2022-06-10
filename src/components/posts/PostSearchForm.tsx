import React from "react";

interface FormProps {
  keyword: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PostSearchForm: React.FC<FormProps> = ({ keyword, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="posts-search-form">
      <div className="form__input__wrapper">
        <input
          type="text"
          className="form__input"
          placeholder="search keyword"
          name="keyword"
          onChange={handleChange}
        />
        <label className={keyword === "" ? "form__label" : "form__label active"}>search keyword</label>
      </div>
      <button type="submit" className="form__button posts-search-button">
        Find
      </button>
    </form>
  );
};

export default PostSearchForm;
