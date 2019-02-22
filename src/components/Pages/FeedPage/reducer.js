
import { SETURLCONST, DELETEURLCONST } from './action'
const initialState = {
  url: [],
}

export function feedReducer(state = initialState, action) {
  switch (action.type) {
    case SETURLCONST: {
      const newItem = {
        url: action.payload.url,
        urlData: action.payload.data,
        selected: true
      }
      const data = state.url;
      data.filter((data) => { if (newItem.url !== data.url) { data.selected = false } })
      data.unshift(newItem)
      return {
        ...state,
        url: data
      }
    }
    case DELETEURLCONST: {
      const newUrl = state.url.filter((obj, index) => {
        if (obj.url === action.payload) {
          if (index === state.url.length-1 && index !== 0) {
            state.url[index - 1].selected = true;
          } else if(index === 0) {
            if(state.url.length > 1)
            state.url[index + 1].selected = true;
          }
        } return obj.url !== action.payload
      });
      return {
        ...state,
        url: newUrl
      }
    }
  }
  return state;
}