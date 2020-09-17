import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss']
})
export class ErrorCardComponent implements OnInit {

  @Input() 
  public service: string;

  constructor() { }

  ngOnInit(): void {
  }

}