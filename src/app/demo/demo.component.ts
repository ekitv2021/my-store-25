import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsDemoService } from '../rxjs-demo.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy{
  constructor(private rs: RxjsDemoService){}

  name = 'itvedant'

  private _age = 1

  set age(input:number){
    if(input < 1 || input > 100)
      this._age = 1
    else
      this._age = input;
    // console.log('setter: ' + this._age)
  }

  get age(): number{
    // console.log('getter: ' + this._age);
    return this._age;
  }

  unsubscribeA(){
    this.rs.unSubscribeA();
  }

  unsubscribeB(){
    this.rs.unSubscribeB();
  }

  //! is used to declare a variable without initialization, but we have
  //to make sure that variable will get a value
  colors!: string[];

  sub$!: Subscription;

  //for the async pipe to work we can create a local observable of the 
  //same type as the type of the observable provided by the service
  myColors$!: Observable<string[]>

  ngOnInit(){
    //now we will subscribe to local observable myColors$ but by using async pipe
    this.myColors$ = this.rs.colors$; //this is not subscribing
    // this.sub$ = this.rs.colors$.subscribe(cols => this.colors = cols);
  }

  ngOnDestroy() {
    // this.sub$.unsubscribe();
  }

  subscribeB(){
    this.rs.subscribeB();
  }
}
