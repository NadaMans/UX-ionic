import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  patientForm = new FormGroup({
    nameEnglish : new FormControl(''),
    nameArabic : new FormControl(''),
    gender : new FormControl(''),
    MaterialStatue :new FormControl(''),
    dateOfBirth :new FormControl(''),
    nationality :new FormControl(''),
    id:new FormControl(''),
    country :new FormControl(''),
    city:new FormControl(''),
    region:new FormControl(''),
    addressLine:new FormControl(''),
    workPhone:new FormControl(''),
    mobilePhone:new FormControl(''),
    homePhone:new FormControl(''),
    email:new FormControl('')
  })


  onSubmit() {
    var patientData = this.patientForm.getRawValue();
    patientData.id = new Date().getUTCMilliseconds();
    console.log(patientData);

    var patientList: any;
    this.storage.get('patientList').then(res => {
      patientList = res
      console.log(patientList)
      patientList.push(patientData)
      console.log(patientList)
      this.storage.set('patientList', patientList)

      alert(patientData.id + ': ' + patientData.nameEnglish)
      this.Router.navigate([`/home`])
    })

  }

  constructor(public Router: Router,private storage: Storage) { }

  ngOnInit() {
  }

}
