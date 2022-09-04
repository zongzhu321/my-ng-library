import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib1 works!
    </p>
    <lib-foo></lib-foo>
  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
