import React from "react";
import ColumnContainer from "../containers/ColumnContainer";

const App = () => (
  <div>
    <ColumnContainer
      type="results"
      heading="Results"
      buttonText="Add Property"
      buttonBackgroundColor="green"
    />
    <ColumnContainer
      type="saved"
      heading="Saved Properties"
      buttonText="Remove Property"
      buttonBackgroundColor="red"
    />
  </div>
);

export default App;
