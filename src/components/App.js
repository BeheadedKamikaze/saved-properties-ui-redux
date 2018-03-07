import React from "react";
import ColumnContainer from "../containers/ColumnContainer";

const App = () => (
  <div>
    <ColumnContainer type="results" />
    <ColumnContainer type="saved" />
  </div>
);

export default App;
