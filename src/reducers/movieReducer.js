export const movieReducer = (state, action) => {
  const movieItems = [...state];
  const id = action.payload.id;
  const itemIndex = movieItems.findIndex((movie) => movie.id === id);

  switch (action.type) {
    case "add":
      if (itemIndex < 0) {
        movieItems.push({ ...action.payload });
        return movieItems;
      }
      
      return movieItems;

    case "remove":
      return movieItems.filter((movie) => movie.id !== id);

    default:
      throw new Error("unhandled case");
  }
}