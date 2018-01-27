

export class Utils {
  static throwIfTrue(isTrue: boolean, errorMessage: string) {
    if (isTrue) {
      throw new Error(errorMessage);
    }
  }
  static rejectPromiseIfTrue(isTrue: boolean, errorMessage: string, reject: Function) {
    isTrue && reject(new Error(errorMessage));
  }
  static isString() : boolean {
    return true;
  }
  static isStringNullorEmpty(value: string) : boolean {
    return !(value && typeof(value) === 'string' && value.trim().length>0);
  }
}
