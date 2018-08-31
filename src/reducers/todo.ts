import { TodoState } from './state'
import { TodoActions } from '../actions/todos'

export const initialState: TodoState[] = [
  {
    id: '1',
    text: '1⃣️',
    completed: false,
  },
  {
    id: '2',
    text: '2⃣️',
    completed: false,
  },
]

export const TodoReducer = (
  state = initialState,
  action: TodoActions,
): TodoState[] => {
  switch (action.type) {
    case TodoActions.Type.ADD_TODO:
      return [
        ...state,
        {
          id: 'abc',
          text: action.text,
          completed: false,
        },
      ]
    case TodoActions.Type.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      )
    default:
      return state
  }
}
