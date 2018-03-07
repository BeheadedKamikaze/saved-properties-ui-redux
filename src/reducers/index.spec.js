import properties from "./index";

describe("properties reducer", () => {
  it("should handle empty list", () => {
    expect(properties(undefined, {})).toEqual({});
  });

  it("should handle ADD_PROPERTY", () => {
    const data = {
      results: [
        {
          price: "$123,500",
          id: "1"
        }
      ],
      saved: [
        {
          price: "$789,500",
          id: "2"
        }
      ]
    };

    expect(properties(data, { type: "ADD_PROPERTY", id: "1" })).toEqual({
      results: [
        {
          price: "$123,500",
          id: "1"
        }
      ],
      saved: [
        {
          price: "$789,500",
          id: "2"
        },
        {
          price: "$123,500",
          id: "1"
        }
      ]
    });
  });

  it("should handle REMOVE_PROPERTY", () => {
    const data = {
      results: [
        {
          price: "$123,500",
          id: "1"
        }
      ],
      saved: [
        {
          price: "$123,500",
          id: "1"
        },
        {
          price: "$789,500",
          id: "2"
        }
      ]
    };

    expect(properties(data, { type: "REMOVE_PROPERTY", id: "1" })).toEqual({
      results: [
        {
          price: "$123,500",
          id: "1"
        }
      ],
      saved: [
        {
          price: "$789,500",
          id: "2"
        }
      ]
    });

    expect(properties(data, { type: "REMOVE_PROPERTY", id: "2" })).toEqual({
      results: [
        {
          price: "$123,500",
          id: "1"
        },
        {
          price: "$789,500",
          id: "2"
        }
      ],
      saved: [
        {
          price: "$123,500",
          id: "1"
        }
      ]
    });
  });
});
