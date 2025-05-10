import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  ionViewDidEnter() {

    console.log( "Tab 2 (Hunde) ist geöffnet worden." );
  }

}
