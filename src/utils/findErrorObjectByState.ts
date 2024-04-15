interface ErrorObject {
  message: string;
  messageType?: string;
  setErrorField?: boolean;
  state: string;
}

export function findErrorObjectByState(
  errors: ErrorObject[],
  state: string
): ErrorObject | undefined {
  return errors.find((error) => error.state === state && error.setErrorField);
}
