import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { Router } from '@angular/router';
import { OwnerComponent } from '../owner/owner.component';

@Component({
  selector: 'app-changeowner',
  templateUrl: './changeowner.component.html',
  styleUrls: ['./changeowner.component.css']
})
export class ChangeownerComponent implements OnInit {
public successful_message:boolean;
public validation_error:boolean;
public unableto_transfer:boolean;
public accountaddress_error:boolean;
  constructor(private grabit:GrabitService,private route:Router,private owner:OwnerComponent) { }

  transferOwnership(toaddress:string){
    this.successful_message=false;
    this.validation_error=false;
    this.unableto_transfer=false;
    this.accountaddress_error=false;
    if(toaddress.trim() !=""){
      var instance = this;
      instance.owner.spinner.show();
      instance.grabit.transferOwnership(toaddress.trim()).then(res =>{
        instance.owner.spinner.hide();
        if(res == 0){
          instance.validation_error=true;
        }
        else if(res == 1){
          (document.getElementById("toadd")as HTMLInputElement).value="";
          this.successful_message=true;       
          this.route.navigate(['/login']);
        }
        else if(res == 2){
          instance.unableto_transfer=true;
        }
      })
    }
    else{
      this.validation_error=true;
    }
  }

  ngOnInit() {
    (document.getElementById("addr")as HTMLInputElement).value=this.grabit._etherumAccountAddress;
  }

}