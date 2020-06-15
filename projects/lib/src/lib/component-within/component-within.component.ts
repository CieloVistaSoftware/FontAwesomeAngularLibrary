import { Component, OnInit } from '@angular/core';
import {faAmbulance} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'lib-component-within',
  templateUrl: './component-within.component.html',
  styleUrls: ['./component-within.component.css']
})
export class ComponentWithinComponent implements OnInit {
  test = faAmbulance;
  constructor() { }

  ngOnInit(): void {
  }

}
