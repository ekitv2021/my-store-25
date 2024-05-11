import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  name!:string;
  age!:number;

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.name = data['name'];
      this.age = data['age'];
    })
  }
}
