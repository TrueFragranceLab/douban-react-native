import { FuckState } from './state'
import { FuckActions } from '../actions/fuck'

const initialState: FuckState = {
  bb: 'I am bb',
}

export const FuckReducer = (
  state = initialState,
  action: FuckActions,
): FuckState => {
  switch (action.type) {
    default:
      return state
  }
}
