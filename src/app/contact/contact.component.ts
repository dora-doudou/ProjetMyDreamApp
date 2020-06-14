import { Component, OnInit } from '@angular/core';
import { Contact} from '../class/contact';
import { ContactService } from '../service/contact.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contact = new Contact;
  constructor( private contactservices : ContactService , private form : FormBuilder) { }
  contactforms = this.form.group({
    nom : ['', Validators.required],
    email : [''],
    tel : [''],
    sujet : [''],
    message : ['']
});
  ngOnInit() {
  //  this.onSubmit();
  }

  /*addcontact(){
    console.log(this.contact)
    this.contactservices.addcontac(this.contact)
    .subscribe (
      res=>
      { console.log(res) } )
  }*/

onSubmit(){
 //console.log(this.contactforms.value);

 this.contactservices.addcontac(this.contactforms.value)
 .subscribe(
  res => {
   console.log(res);
  },
  err => {
    console.log ("erreur");
  }
)
 
}
}
