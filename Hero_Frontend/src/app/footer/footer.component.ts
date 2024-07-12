import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 display =true;
 cacherImage=true;


 fruits =['apple','banana','orange','kiwi','manga'];

students = [
  {'name':'rabeb','age':25},
  {'name':'ons','age':30},
  {'name':'abir','age':40},
  {'name':'nihel','age':50},
]

color ='red';

user ={
  name:'hamza',
  age:25,
  bg:'red',
  color:'blue'
}





}
