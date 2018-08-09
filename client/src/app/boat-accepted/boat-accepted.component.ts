import { Component, OnInit } from '@angular/core';
import { AuthenticationService,TokenPayload, BoatList } from '../authentication.service';


@Component({
  selector: 'app-boat-accepted',
  templateUrl: './boat-accepted.component.html',
  styleUrls: ['./boat-accepted.component.css']
})
export class BoatAcceptedComponent implements OnInit {

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
