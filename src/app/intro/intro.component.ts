import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  

  constructor(private _router: Router ) { 
    
  }
  
  ngOnInit(): void {
  }
  navigateToVideo(){
    this._router.navigate(['video'])
  }
  navigateToDemo() {
    this._router.navigate(['demo'])
  }

  
}
