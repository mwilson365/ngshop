import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Counter } from '../counter';
import { Input } from '@angular/core';
import { Dog } from '../dog';


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  title = 'Dog List';
  dogs: Dog[] = [];
  numLikes: number = 0;
  counters: Counter [];
  @Input() counter: Counter;
  // dogs: this.getAll();
  constructor(private dogsService: DogsService) {
     
     
  }
  ngOnInit(): void {
    this.getUpdates();
    
    const size = this.dogs.length 
  }
  getUpdates(){
    return this.dogsService.all().subscribe(data => this.dogs = data);
  }

  startCounter(){
    const counter = new Counter();
    this.counters.push(counter);
  }
  

  increment(): void{
    this.numLikes++;
  }

  // getAll(){
  //   this.dogs = this.dogsService.all();
  //  }
}

