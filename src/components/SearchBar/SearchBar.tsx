import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { useState, FormEvent, ChangeEvent } from "react";


interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps>= ({ onSubmit }) => {
    const [query, setQuery] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (query.trim() === "") {
            toast.error("Please enter a search term!");
            return;
        }

        onSubmit(query);
        setQuery("");
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setQuery(event.target.value);
};


   return (
  <header >
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  </header>
);

};

export default SearchBar;
