export namespace TodoActions {
  export enum Type {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
  }
}

export type TodoActions = {
  type: String
  id: string
  text: string
  completed: boolean
}
