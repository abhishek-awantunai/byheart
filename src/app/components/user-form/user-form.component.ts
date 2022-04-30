import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  get username() {
    return this.userForm.get('username');
  }

  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      username: ['', [Validators.required, this.forbiddenNameValidator]],
      password: this._fb.control(null),
      retype: this._fb.control(null),
    },{
        validators: [this.customValidator ('password', 'retype')]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event): void {
    console.log(this.userForm.controls);
  }

  private forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
    const forbidden = /admin/.test(control.value);
    return forbidden ? {'forbiddenName': { value: control.value }} : null;
  }

  private customValidator(controlNameA: string, controlNameB: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const valueOfCOntrolA = formGroup.get(controlNameA)?.value;
      const valueOfCOntrolB = formGroup.get(controlNameB)?.value;

      if (valueOfCOntrolA === valueOfCOntrolB) {
        return { valuesDoesNotMatch: false };
      } else {
        return { valuesDoesNotMatch: true };
      }
    } 
  }

}
