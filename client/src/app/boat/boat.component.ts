import { Component } from '@angular/core';
import { AuthenticationService,TokenPayload, BoatList } from '../authentication.service';

@Component({
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})


export class BoatComponent  {
 
  boats: BoatList;
  

  constructor(private auth: AuthenticationService) { }

  updateStatus(boat,acc_dec) {
    
    if(acc_dec==1)
    boat.status="declined";
    else
    boat.status="accepted";

    this.auth.updateStatus(boat).subscribe(() => {
      console.log(this.boats);
    }, (err) => {
      console.error(err);
    });
  }

  ngOnInit() {
    this.auth.boats().subscribe(data => {
      this.boats = data;
    }, (err) => {
      console.error(err);
    });
  }

}
