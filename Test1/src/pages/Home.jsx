import { Link } from "react-router-dom";
import List from "../component/List";
import { useBooksContext } from "../hooks/useBooksContext";

export default function Home() {
  const { state } = useBooksContext();
  return (
    <>
      <div>
        <h2>Home</h2>
        <List list={state.books} />
      </div>
    </>
  );
}
