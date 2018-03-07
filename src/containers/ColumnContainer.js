import { connect } from "react-redux";
import { addProperty, removeProperty } from "../actions";
import Column from "../components/Column";

const mapStateToProps = (state, ownProps) => ({
  type: ownProps.type,
  properties:
    ownProps.type === "results"
      ? state.results
      : state.saved
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buttonClick: id =>
    dispatch(ownProps.type === "results" ? addProperty(id) : removeProperty(id))
});

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column);

export default ColumnContainer;
