import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttoncmp',
  templateUrl: './buttoncmp.component.html',
  styleUrls: ['./buttoncmp.component.css']
})
export class ButtoncmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function myFunction() {
      var x = document.getElementById("Demo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }
  }

}
