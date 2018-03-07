import * as actions from "./index";

describe("property actions", () => {
  it("addProperty should create ADD_PROPERTY action", () => {
    expect(actions.addProperty(1)).toEqual({
      type: "ADD_PROPERTY",
      id: 1
    });
  });
  it("removeProperty should create REMOVE_PROPERTY action", () => {
    expect(actions.removeProperty(1)).toEqual({
      type: "REMOVE_PROPERTY",
      id: 1
    });
  });
});
