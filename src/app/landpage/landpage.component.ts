import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  navigate(url:string){
    console.log(url)
    this.router.navigate([url]);
  }
  
}
