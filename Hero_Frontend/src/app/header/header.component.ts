import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //data binding :transfert de data bin html et ts: 4 forms
  
  
  //1 ::String Interpolation ts--->html
  name = "wala hammemi";
  age = 60;
   //2:: Property binding
   urlImage ='assets\image.jpg';
   altImage ='cute photo';
   //3:: Event Binding
     change(){
      this.name="master class";
      this.age =5;
     }

       
     //Tow way data binding
     text='';

     //Exercice
     user= {
           name :'rabeb',
           age:'90',
           image:'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
           } 
          
       myName ='';
       changeName(){
         this.user.name=this.myName;
       }



          }










  
