import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-myaccount',
 templateUrl: './myaccount.component.html',
 styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  
  public username;
  public emails;
  public publickey;
  public balance;
  public paticipatedcount;
  public woncount;
  public credits;
  public successful_message:boolean;
  public credentials_error:boolean;
  public validation_error:boolean;

  constructor(private grabit:GrabitService,private route:Router) {
    this.fetch_user_balance();
    this.fetch_user_address();
    this.paticipatedandwon();
    this.credit_balance();
    this.mydetails();
    this.successful_message=false;
    this.credentials_error=false;
    this.validation_error=false;

  }

  fetch_user_balance(){
    var instance =this;
    instance.grabit.getEtherumAccountBalance().then(res =>{
      instance.balance = res;
    });
  }

  fetch_user_address(){
    var instance =this;
    instance.publickey=instance.grabit._etherumAccountAddress;
  }

  paticipatedandwon(){
    let instance = this;
    instance.paticipatedcount=0;
    instance.woncount=0;
    instance.grabit.auctionList().then(a_ids=>{
      a_ids.forEach(id => {
        instance.grabit.auctionDetails(id).then(auctiondetails=>{
          instance.grabit.bidDetails(id).then(bitteramount=>{
            if(bitteramount!=0){
              instance.paticipatedcount++;
            }
            if(auctiondetails[6]==1 && auctiondetails[5][0]==bitteramount && bitteramount!=0){
              instance.woncount++;
            }
          })
        })
      });
    })
  }

  credit_balance(){
    let meta = this;
    meta.grabit.balanceOf().then(result =>{
      meta.credits  = result;
    })
  }

  mydetails(){
    var instance =this;
    instance.grabit.getuserthings().subscribe(
      res => {
        instance.username = res['user']['fullName'];
        instance.emails = res['user']['email'];
      },
      err => {
        console.log(err.message);
      }
    );
  }

  changepassword(oldpassword,newpassword){
    this.successful_message=false;
    this.validation_error=false;
    this.credentials_error=false;
    if(oldpassword.trim() !="" && newpassword.trim() !=""){
    var instance = this;
    var temp1={}
    temp1['email']=instance.emails;
    temp1['passwordold']=oldpassword;
    temp1['password']=newpassword;
    instance.grabit.changepassword(temp1).subscribe(
      res => {
        (document.getElementById("oldpass")as HTMLInputElement).value="";
        (document.getElementById("newpass")as HTMLInputElement).value="";
        (document.getElementById("conpass")as HTMLInputElement).value="";
        instance.successful_message=true;
        instance.grabit.deleteToken();
        instance.route.navigate(["/login"])
        //  window.location.reload();
      },
      err => {
        instance.credentials_error=true;
        console.log(err.error.message)
      }
    );
  }
  else{
this.validation_error=true;
  }
  }

  passwordchange(newpass,confirmpass) {
    if(newpass==confirmpass){
      document.getElementById("passwordmessage").style.color="green";
      document.getElementById("passwordmessage").innerHTML = "Good";
      (document.getElementById("changebtn")as HTMLButtonElement).disabled=false
    }
    else{
      document.getElementById("passwordmessage").style.color="red";
      document.getElementById("passwordmessage").innerHTML = "miss match";
    }
  }

  ngOnInit() {

  }

}