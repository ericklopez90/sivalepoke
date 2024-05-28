import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time!: Observable<string>;

  ngOnInit() {
    this.time = interval(1000).pipe(
      map(() => new Date().toLocaleTimeString())
    );
  }

}
