// I am a typing file ...

export interface TodoState {
  id: string
  text: string
  completed: boolean
}

export interface FuckState {
  bb: string
}

export interface MoiveState {
  title: string
}

export interface RootState {
  todos: TodoState[]
  fuck: FuckState
  movies: MoiveState[]
}
