import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactivefromWithformBuilder';
  // loginForm: any;
  // name: any;
  // email: any;
  // id: any;
  // address: any;
  // myArr: any = [];
  // // list: any;

  // ngOnInit() {
  //   let local: any = localStorage.getItem('data');
  //   if (local == null) {
  //     alert(" No Data Found");
  //   }
  //   else {
  //     this.myArr = (JSON.parse(local));
  //     console.log(this.myArr);

  //   }



  // }

  // // constructor(private _form: FormBuilder) {
  // //   this.loginForm = this._form.group({
  // //     name: ['', Validators.required],
  // //     email: ['', Validators.required],
  // //     id: [''],
  // //   });
  // // }

  // // getformData() {
  // //   if (this.loginForm.status === 'INVALID') {
  // //     alert('something is missing ');
  // //   } else {
  // //     this.myArr.push(this.loginForm.value);
  // //     console.log(this.myArr);
  // //   }
  // //   // console.log(this.loginForm.status);
  // // }

  // constructor(private _form: FormBuilder) {
  //   this.loginForm = this._form.group({
  //     name: [''],
  //     email: [''],
  //     id: [''],
  //     address: [''],
  //   });
  // }

  // getData() {
  //   // console.log(this.loginForm.value);
  //   this.myArr.push(this.loginForm.value);
  //   localStorage.setItem('data', JSON.stringify(this.myArr)
  //   );


  // }
}
