import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  GET_DEMO_LIST,
  ADD_DEMO_LIST,
  VisibilityFilters
} from './action-types'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const demoListInit = [{
  text: 1
}, {
  text: 2
},  {
  text: 3
},  {
  text: 4
},  {
  text: 5
}]
function demoList(state = demoListInit, action) {
  switch (action.type) {
    case ADD_DEMO_LIST:
      return [...state, { text: action.text }]
    case GET_DEMO_LIST:
      return state
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  demoList,
})

export default todoApp