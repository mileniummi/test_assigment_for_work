export interface IError {
  message: string;
  code: number;
}

export function isInstanceOfIError(obj: any): obj is IError {
  return (
    (obj as IError).message !== undefined && (obj as IError).code !== undefined
  );
}
