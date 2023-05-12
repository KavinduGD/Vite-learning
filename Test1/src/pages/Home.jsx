import { Link } from "react-router-dom";
import BooksList from "../component/BooksList";
import { useBooksContext } from "../hooks/useBooksContext";

export default function Home() {
  const { state } = useBooksContext();
  return (
    <>
      <div>
        <h2>Home</h2>
        <BooksList list={state.books} />
      </div>
    </>
  );
}
