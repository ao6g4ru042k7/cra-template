export interface OptionsItemResponse {
  label: string;
  value: string;
}

export interface SelectParams {
  id: number | string;
}

export interface CreateOptionParams {
  id: string;
  title: string;
  message: string;
}
