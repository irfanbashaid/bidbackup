import { Component, OnInit ,OnDestroy} from '@angular/core';
import { GrabitService } from "../service/grabit.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit,OnDestroy {

  public credit_balance;
  public tabSelected:number=1;
  public owner_name:string;
  public spinner;
  public id1;
  constructor(private grabit:GrabitService,private route:Router,private spin:NgxSpinnerService) { 
    this.acc_balance();
    this.load_owner_name();
    this.browser_btn_disable();
    this.check_privateKey()
    this.spinner =this.spin;
  }

  browser_btn_disable(){
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
   }
   check_privateKey(){
    if(this.grabit._privateKey==undefined || this.grabit._privateKey.length!=64){
      this.grabit.deleteToken();
      this.route.navigate(['/login'])
    }
   }

  load_owner_name(){
    let meta =this;
    meta.grabit.getuserthings().subscribe(
      res=>{
        meta.owner_name=res['user']['fullName'];
      },
      err =>{

      }
    )
  }
  chooseTab(selected){
    this.tabSelected = selected;
  }
 
  acc_balance(){
    let meta = this;
    meta.grabit.balanceOf().then(bal => {
      meta.credit_balance = bal;
    })
  }

  
  onLogout(){
    this.grabit.deleteToken();
    this.route.navigate(['/login']);
  }

  top_up_credits(){
    
  }

  transferOwnership(){
  }
 

  ngOnInit() {
    window.onbeforeunload=function(){
      return "Sure";
      }
      
    let meta = this;
        meta.id1 = setInterval(function() {          
        if(meta.grabit._privateKey==undefined)
        {
          clearInterval(this.interval);
          meta.route.navigate(['login'])              
        }
      }, 25);

      
    }
     ngOnDestroy() {
         if (this.id1) { 
           clearInterval(this.id1);
         }  
        }


}