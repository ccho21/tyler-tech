import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAddress } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  user?: UserAddress;
  @Output() formEmit: EventEmitter<UserAddress> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', [Validators.required, this.validatePostalCode]], // validation required
    });
  }

  private validatePostalCode() {
    console.log('### check temporarily');
    return true;
  }
  submit() {
    console.log('### this user form', this.userForm);
    //validate input

    const user = this.userForm.value;
    //emit the form value;
    this.formEmit.emit(user);
  }
}
