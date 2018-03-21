import { connect } from "react-redux";
import { addProperty, removeProperty } from "../actions";
import Column from "../components/Column";
import { selectProperties } from "../selectors";

const mapStateToProps = (state, ownProps) => ({
  properties: selectProperties(state, state[ownProps.type])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buttonClick: id =>
    dispatch(ownProps.type === "results" ? addProperty(id) : removeProperty(id))
});

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column);

export default ColumnContainer;
