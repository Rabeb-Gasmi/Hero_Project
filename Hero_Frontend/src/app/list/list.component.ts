import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit {
  constructor(public shared: SharedService){}

  heros:any;
  ngOnInit():void{
   this.shared.getAllHeros().subscribe(res=>{
    this.heros =res;
    console.log("heros are :" ,res);
    console.log(this.heros);
   }
  ,err=>{
    console.log(err);
  })
}
  

delete(id){
  this.shared.deleteHero(id)
  .map((res : Response) => res.json())
  .subscribe(res=>
    { console.log(res);
      Swal.fire({
        position:'center',
        icon:'success',
        title :'Hero deleted succesuffully',
        showCancelButton:true,
        timer:2000
      })
      this.ngOnInit();
    }
    ,err=>{console.log(err);
      Swal.fire({
        position:'center',
        icon:'error',
        title :'Error in Deleting  Hero',
        showCancelButton:true,
        timer:2000
      })
      }) 
  }



}
