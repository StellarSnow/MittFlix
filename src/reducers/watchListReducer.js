export const watchListReducer = (state, action) => {
  const watchListItems = [...state];
  const id = action.payload.id;
  const itemIndex = watchListItems.findIndex((watchListItem) => watchListItem.id === id);

  switch (action.type) {
    case 'toggleWatchListItem':
      if (itemIndex < 0) {
        watchListItems.push({ ...action.payload });
        
        return watchListItems;
      } 
      
      return watchListItems.filter((movie) => movie.id !== id);;

    case 'remove':
      return watchListItems.filter((movie) => movie.id !== id);

    case 'isOnWatchList':
      return watchListItems;

    default:
      throw new Error('unhandled case');
  }
}