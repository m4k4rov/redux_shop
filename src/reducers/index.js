const initialState = {
  menu: [],
  loading: true,
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case 'ITEM_DEL':
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload)
    }
    case 'ITEM_ADD':
      const id = action.payload;
      const item = state.menu.find(item => item.id == id);
      let newState = []
      if (state.items.find(i => i.id == item.id)) {
        newState = [
          ...state.items.filter(i => i.id != item.id),
          {
            ...state.items.find(i => i.id == item.id),
            count: state.items.find(i => i.id == item.id).count + 1
          }
        ]
      } else {
        newState = [
          ...state.items,
          {
            ...item,
            count: 1
          }
        ]
      }

      return {
        ...state,
        items: newState
      }
    default:
      return state;
  }
}

export default reducer;