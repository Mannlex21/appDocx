export interface RequestDocx {
  keySeparator: string;
  title: string;
  type: Type;
}

export interface Type {
  value: string;
  separator?: string;
}
