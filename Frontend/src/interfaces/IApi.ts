export interface Response {
  data: Data[];
  message: string;
  isSuccess: boolean;
}

export interface Data {
  id: number;
  name: string;
  commission: number;
  state: boolean;
}

