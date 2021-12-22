export const saveCharacterData = data => {
  return {
    type: 'SAVE_CHARACTER_DATA',
    payload: data,
  };
};

export const addCharacterToFavourites = data => {
  return {
    type: 'ADD_CHARACTER_TO_FAVOURITES',
    payload: data,
  };
};

export const removeCharacterFromFavourites = data => {
  return {
    type: 'REMOVE_CHARACTER_FROM_FAVOURITES',
    payload: data,
  };
};
