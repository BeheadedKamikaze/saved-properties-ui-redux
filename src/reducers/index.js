// const properties = (state = {}, action) => {
//   switch (action.type) {
//     case "ADD_PROPERTY":
//       return {
//         results: state.results,
//         saved: [
//           ...state.saved,
//           state.results.filter(property => property.id === action.id)[0]
//         ].filter(unique)
//       };
//     case "REMOVE_PROPERTY":
//       return {
//         results: [
//           ...state.results,
//           state.saved.filter(property => property.id === action.id)[0]
//         ].filter(unique),
//         saved: state.saved.filter(property => property.id !== action.id)
//       };
//     default:
//       return state;
//   }
// };

// const unique = (elem, pos, arr) => arr.indexOf(elem) === pos;
import dedupe from "dedupe"

const properties = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PROPERTY":
      return {
        results: state.results,
        saved: dedupe([
          ...state.saved,
          state.results.filter(property => property.id === action.id)[0]
        ])
      };
    case "REMOVE_PROPERTY":
      return {
        results: dedupe([
          ...state.results,
          state.saved.filter(property => property.id === action.id)[0]
        ]),
        saved: state.saved.filter(property => property.id !== action.id)
      };
    default:
      return state;
  }
};

export default properties;
