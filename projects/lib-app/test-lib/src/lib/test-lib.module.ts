import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { FooComponent } from './foo/foo.component';
import { Foo2Component } from './foo2/foo2.component';



@NgModule({
  declarations: [
    TestLibComponent,
    FooComponent,
    Foo2Component
  ],
  imports: [
    
  ],
  exports: [
    TestLibComponent,
    FooComponent
  ]
})
export class TestLibModule { }
