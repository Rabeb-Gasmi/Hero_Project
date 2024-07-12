import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  hero : any;

  constructor(public shared :SharedService,private act : ActivatedRoute,private router : Router) {}
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.shared.getHeroById(this.id)
        .subscribe(res=>{
            this.hero = res;
            console.log("hero is :",this.hero);
            
        })
  }




  
  update(){
    this.shared.updateHero(this.id,this.hero)
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
          title :'Hero Updated succesuffully',
          showCancelButton:true,
          timer:2000
        })
        this.router.navigate(['/liste'])
      }
      ,err=>{console.log(err);
        Swal.fire({
          position:'center',
          icon:'error',
          title :'Error in Updating  Hero',
          showCancelButton:true,
          timer:2000
        })
      })
  }
}
