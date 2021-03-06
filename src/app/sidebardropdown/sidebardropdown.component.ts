import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

import * as $ from 'jquery';

@Component({
  selector: 'app-sidebardropdown',
  templateUrl: './sidebardropdown.component.html',
  styleUrls: ['./sidebardropdown.component.css']
})
export class SidebardropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  function($) {
    var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
    $('#accordion .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
    $('#accordion').on('show.bs.collapse', function (e) {
      $('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
      $(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
  };
}
