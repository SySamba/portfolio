import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  addresses = [
    {
      name: 'Mousta',
      address: 'Villa N° 366\nTerminus Liberté 5,\nDakar',
      selected: true
    },
    {
      name: 'Mousta',
      address: 'Villa N° 36\nHLM Grand Yoff,\nDakar',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() { }

  selectAddress(index: number) {
    this.addresses.forEach((address, i) => {
      address.selected = i === index;
    });
  }

  modifyAddress(address: { name: string; address: string; selected: boolean }) {
    console.log('Modify address:', address);
    // Navigate to address modification page or open a modal
  
  }

}
