import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'avam-checkbox',
  templateUrl: './avam-checkbox.component.html',
  styleUrls: ['./avam-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() value = false;
  isDisabled = false;
  private propagateChange = (_: any) => { };

  constructor() { }

  //#region ControlValueAccessor Overrides
  writeValue(obj: any): void {
    this.value = obj && obj===true ? true : false;
  }
  // registers 'fn' that will be fired when changes are made
  // this is how we emit the changes back to the form
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  //#endregion

  toggleValue() {
    this.value = !this.value;
    this.propagateChange(this.value);
  }

}
