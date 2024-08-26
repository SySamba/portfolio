import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  address: any = {
    name: '',
    phone: '',
    street: '',
    city: '',
    region: '',
    country: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  saveAddress() {
    // Sauvegarder l'adresse (vous pouvez utiliser un service pour gérer les adresses)
    console.log('Address saved:', this.address);
    this.router.navigate(['/tabs/tab4']);
  }
}
