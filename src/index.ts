import { FormGroup, FormControl } from "@angular/forms";

class UtilsMatFormGroup {
  constructor() {}

  public validateFormGroup(form: FormGroup) {
    let validField = true;
    Object.entries(form.controls).forEach(([, val]) => {
      let valItemForm = val as FormControl;
      if (valItemForm.status == "INVALID") {
        validField = false;
        valItemForm.markAsTouched();
      }
    });

    return validField;
  }

  insertValuesFormGroup(dataObject: any, form: FormGroup) {
    try {
      Object.entries(dataObject).forEach(([key, val]) => {
        if (typeof val === "boolean") {
          form.controls[`${key}`].setValue(val);
        } else {
          form.controls[`${key}`].setValue(`${val !== null ? val : ""}`);
        }
      });
    } catch (error) {
      console.warn("Error insert data fom form group");
    }
  }
}

export default UtilsMatFormGroup;
