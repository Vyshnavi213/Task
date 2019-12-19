import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userModel : User;
  constructor() { }
  //userModel = new User('Rob', 'mail.com', 'abcd', 1222424234);

  ngOnInit() {
    this.userModel = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    }
  }

  // registerUser() {
  //   var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   var pattern1 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  //   var e = document.getElementById("mailId").value;
  //   var e1 = document.getElementById("pswrd").value;
  //   if ((pattern1.test(e)) && (pattern.test(e1))) {
  //     alert("Valid Credentials");
  //   }
  //   else {
  //     alert("Invalid Credentials");
  //   }
  // }

}
