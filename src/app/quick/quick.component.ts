import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick',
  template: `
    <p>
      quick works!
    </p>
  `,
  styleUrls: ['./quick.component.css']
})
export class QuickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
