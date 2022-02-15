const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
};

const onDelete = (id) => {
  return {
    type: 'ITEM_DEL',
    payload: id
  };
};

const addToCart = (id) => {
  return {
    type: 'ITEM_ADD',
    payload: id
  };
};

export {menuLoaded, onDelete, addToCart};