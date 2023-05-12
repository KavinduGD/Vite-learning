import { createContext, useReducer } from "react";

export const BooksContext = createContext();

export const booksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        books: [
          ...state.books,
          { id: Math.random(), name: action.payload.name },
        ],
      };
    case "DELETE_BOOK":
      return {
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
  }
};

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, {
    books: [
      {
        id: 1,
        name: "Item1",
      },
      {
        id: 2,
        name: "Item",
      },
    ],
  });

  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
