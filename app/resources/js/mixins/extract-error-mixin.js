export default (prefix, errorObject, errors) => {
  const keyModel = "$model";
  let keyError = "";

  if (!errorObject.invalid) {
    for (const key in errorObject) {
      const value = errorObject[key];

      if (!value) {
        keyError = key;
        break;
      }

      if (key == keyModel) {
        break;
      }
    }
  }

  if (keyError && errorObject.$error) {
    return errors[prefix][keyError];
  }
};
