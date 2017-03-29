import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { Logger } from '../../../core';
import { User } from '../../../data';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() locations: Array<any>;

  @Output() formSubmit?: EventEmitter<User> = new EventEmitter<User>();
  @Output() formCreate?: EventEmitter<User> = new EventEmitter<User>();
  @Output() formDelete?: EventEmitter<User> = new EventEmitter<User>();
  @Output() formUpdate?: EventEmitter<User> = new EventEmitter<User>();

  form: FormGroup = this.getFormGroup();

  showDelete = false;

  constructor(
    private logger: Logger
  ) {}

  ngOnInit() {
    this.showDelete = this.formDelete.observers.length > 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user) {
      this.form = this.getFormGroup(changes.user.currentValue);
    }

    this.logger.debug('UserForm user changed', changes);
  }

  ////////////////////

  public isExistingUser(): boolean {
    return this.user != null && this.user.id != null;
  }

  private getFormGroup(user?: User): FormGroup {
    const formGroup = new FormGroup({
      id: new FormControl(null),
      loginId: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      location: new FormControl(''),
      isActive: new FormControl(false),
    });

    formGroup.patchValue(user || {});

    return formGroup;
  }

  ////////////////////

  onFormSubmit() {
    if (this.isExistingUser()) {
      this.formUpdate.emit(this.form.value);
    } else {
      this.formCreate.emit(this.form.value);
    }

    // dispatch formSubmit as an alternative event, in case use doesn't care whether
    // it's a create or an update, they can just listen to this one event
    this.formSubmit.emit(this.form.value);
  }

  onDelete() {
    this.formDelete.emit(this.user);
  }
}
