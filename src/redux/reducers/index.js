const initialState = {
  isClicked: false,
  characterData: [],
  favouritesData: [],
};
const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_CLICKED':
      return {
        ...state,
        isClicked: action.payload,
      };

    case 'SAVE_CHARACTER_DATA':
      return {
        ...state,
        characterData: action.payload,
      };

    case 'ADD_CHARACTER_TO_FAVOURITES':
      return {
        ...state,
        favouritesData: action.payload,
      };

    case 'REMOVE_CHARACTER_FROM_FAVOURITES':
      return {
        ...state,
        favouritesData: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default MainReducer;
