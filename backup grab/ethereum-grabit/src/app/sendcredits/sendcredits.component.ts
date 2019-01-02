import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { OwnerComponent } from '../owner/owner.component';
@Component({
 selector: 'app-sendcredits',
 templateUrl: './sendcredits.component.html',
 styleUrls: ['./sendcredits.component.css']
})
export class SendcreditsComponent implements OnInit {
public validation_error:boolean;
public successful:boolean;
public unable_to_perform:boolean;
public revert_error:boolean;

 constructor(private grabit:GrabitService,private owner:OwnerComponent) {
  }

 sendcredits(receiver,credit){
   var meta=this;
   meta.validation_error=false;
   meta.successful=false;
   meta.unable_to_perform=false
   meta.revert_error=false;
   if(receiver.trim() !="" && credit.trim() !=""){
   meta.owner.spinner.show();
   meta.grabit.mint(receiver,credit).then(res=>{
    meta.owner.spinner.hide();
     if(res == 1) {
       (document.getElementById("raddress")as HTMLInputElement).value="";
       (document.getElementById("creditsid")as HTMLInputElement).value="";
       meta.successful=true;
     }
     else if(res == 0) {
      meta.unable_to_perform=true;

     }
     else if(res == 2) {
      meta.revert_error=true;
    }
   })
 }
 else{
  meta.validation_error=true;
}
 }

 ngOnInit() {
 }

}