export interface IFormField {
  fieldName: string
  dataType: IFieldDataType;
  required: boolean;
  title: string;
  value?: string
}

export enum IFieldDataType {
  STRING = "string",
  NUMBER = "number",
  DROPDOWN = 'dropdown',
  DATE = "date",
  FILE = "file",
  FILES = "files"
}