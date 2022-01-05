import React from "react";
const initialState = {
  books: [
    { id: 1, image:'https://www.libertybooks.com/image/cache/catalog/9780141981253-120x187.jpg?q6', title: "harry potter",  author:'abc', category:'fiction'},
    { id: 2, image:'https://www.libertybooks.com/image/cache/catalog/9780141981253-120x187.jpg?q6' ,title: "harry potter2", author:'def', category:'non-fiction' },
  ],
 
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.books;

      case "ADDBOOK":
          console.log(action.payload)
          const newBook=[]
          newBook.push(action.payload)
      return {
          ...state,
          books: [...state.books, ...newBook]
      }

    default:
      return state
  }
};

export default reducer;
