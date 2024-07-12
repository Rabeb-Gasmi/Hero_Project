import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  constructor(public shared:SharedService){
          
  }
  hero = {
    name:'',
    power:'',
    image:''
  }

  
  ajouter(){
    this.shared.createHero(this.hero)
        .subscribe(res=>
        {
          console.log(res);
          this.hero={
            name : '',
            power :'0',
            image :''
          }
          Swal.fire({
            position:'center',
            icon:'success',
            title :'Hero Added succesuffully',
            showCancelButton:true,
            timer:2000
          })
        }
  
           ,err=>{console.log(err);
          Swal.fire({
            position:'center',
            icon:'error',
            title :'Error in adding  Hero',
            showCancelButton:true,
            timer:2000
          })
        })
    
    
  }}