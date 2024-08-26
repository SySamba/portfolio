import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    // Naviguer vers la page d'accueil ou une autre page
    this.router.navigate(['/tabs/tab1']);
  }
}
