import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  return context;
};
