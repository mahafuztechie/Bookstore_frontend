import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  forgotForm!: FormGroup;
  constructor(private fb: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // onSubmit() {
  //   let data = { email: this.forgotForm.value.email }
  //   this.user.forget(data).subscribe((res: any) => {
  //     console.log(res);
  //   })

  // }

}