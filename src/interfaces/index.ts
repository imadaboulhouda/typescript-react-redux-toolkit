export interface IState {
  data: [] | never[];
  loading: boolean;
  error: string;
}

export interface IAction {
  payload: any;
}

export interface TodoType {
  name: string;
  id: number;
}
export interface User {
  name: string;
}
