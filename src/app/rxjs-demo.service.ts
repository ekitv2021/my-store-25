import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, filter, from, interval, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {

  //Observable can be created using Creation Operators
  firstObservable$ = of(1,5,8,4,3,'hello',true,[8,4,6]);

  // secondObservable$ = from([8,3,5,7,4,3]);

  myObservable$ = new Observable(sub => {
                sub.next(9);
                sub.next(14);
                // sub.complete();
                sub.next('home');
                throw new Error('some error');
                sub.next(false);
  });

  //1000milliseconds = 1second
  intervalObservable$ = interval(1000);

  SubA$: Subscription = new Subscription();
  SubB$: Subscription = new Subscription();

  colors$ = new Observable<string[]>(col => {
    col.next(["red","blue","green","yellow","pink","purple"])
  });

  //declaring the subject
  mySubject$ = new Subject<number>();

  constructor() { 
    //this statement will subscribe to the observable
    //and for individual value of the observable will print it on console

    // this.firstObservable$.subscribe(val => console.log("A: " + val));
    // this.firstObservable$.subscribe(val => console.log("B: " + val));
    // this.secondObservable$.subscribe(val => console.log(val));

    //next notification which the contains the actual value is handled
    //by default by the observer
    // this.myObservable$.subscribe(x => console.log(x));

    // this.myObservable$.subscribe({
    //   next: x => console.log("Next value: " + x),
    //   complete: () => console.log("Observable Completed"),
    //   error: err => console.log("Error Message: " + err)
    // })

    // this.SubA$ = this.intervalObservable$.pipe(filter(val => val % 2 == 0))
    //                         .subscribe(val => console.log("A: " + val));

    //to create the execution path of the subject
    this.mySubject$.subscribe(val => console.log("X: " + val));
    this.mySubject$.next(1);
    this.mySubject$.subscribe(val => console.log("Y: " + val));
    this.mySubject$.next(2);
    this.mySubject$.next(3);
  }

  unSubscribeA(){
    this.SubA$.unsubscribe();
  }

  unSubscribeB(){
    this.SubB$.unsubscribe();
  }

  subscribeB(){
    this.SubB$ = this.intervalObservable$.pipe(map(val => val * val))
                            .subscribe(val => console.log("B: " + val));
  }
}
