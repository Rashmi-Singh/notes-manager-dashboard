import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
})
export class ButtonGroupComponent {
  @Input()
  form!: FormGroup;

  @Output()
  formData: EventEmitter<boolean> = new EventEmitter<boolean>();

  save() {
    this.formData.emit(true);
  }
}
