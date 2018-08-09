import { Component, OnInit } from '@angular/core';
import { AuthenticationService,TokenPayload, BoatList } from '../authentication.service';

@Component({
  selector: 'app-boat-declined',
  templateUrl: './boat-declined.component.html',
  styleUrls: ['./boat-declined.component.css']
})
export class BoatDeclinedComponent implements OnInit {

  boats: BoatList;

  constructor(private auth: AuthenticationService) { }


 ngOnInit() {
    this.auth.boats().subscribe(data => {
      this.boats = data;
    }, (err) => {
      console.error(err);
    });
  }

}
