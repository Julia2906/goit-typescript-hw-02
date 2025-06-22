import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { Toaster } from "react-hot-toast";


type Props = {
  onSearch: (topic: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const topic = (
      form.elements.namedItem("inp") as HTMLInputElement
    ).value.trim();
    if (topic === "") {
      toast.error("Введіть текст");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            name="inp"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">Search</button>
        </form>
      </header>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
