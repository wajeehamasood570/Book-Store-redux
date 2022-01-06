import React from "react";
const initialState = {
  books: [
  
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

      // case: "INC": 
      //   ...state,


    default:
      return state
  }
};

export default reducer;
