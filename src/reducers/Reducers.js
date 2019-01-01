import { OPEN_MENU } from '../actions/Actions';

const openerInitialState = {
  value: false
}
;

const opener = (state = openerInitialState, action) => {
  switch (action.type) {
    case OPEN_MENU: {
      return {
        ...state,
        value: action.value
      };
    }

    default:
      return state;
  }
};

export default opener;
