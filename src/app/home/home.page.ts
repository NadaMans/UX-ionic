import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) {

  }

  patientList: any;

  ngOnInit(): void {
    this.storage.get('patientList').then( res => {
      var list = res
      console.log(list)
      if (list) {
        this.patientList = list
        console.log(this.patientList)
      }
      else {
        this.patientList = []
        console.log(this.patientList)
        this.storage.set('patientList', this.patientList)
      }
    })
  }

  ionViewWillEnter(){
    this.storage.get('patientList').then( res => {
      var list = res
      console.log(list)
      if (list) {
        this.patientList = list
        console.log(this.patientList)
      }
      else {
        this.patientList = []
        console.log(this.patientList)
        this.storage.set('patientList', this.patientList)
      }
    })
   }
}
