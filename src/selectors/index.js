export const selectProperties = (state, ids) =>
  state.properties.filter(property => ids.indexOf(property.id) !== -1)
    .map(property => ({
      ...property,
      isGreyListed: state.greylisted.indexOf(property.id) !== -1
    }))
