import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrabitService } from '../service/grabit.service';
// import $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _web3;
  public  show_signup;
  public show_create_account;
  public show_account_details;
  public account_address;
  public private_key;
  public text1="Private Key:";
  public text2='Ethereum Acc Address:';
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // public showSucessMessage: boolean;
  public show_error:boolean
  public error_message: string;
  public publickey_;
  public serverErrorMessages;
  public show_login_error:boolean;
  public login_error_message;
  public images = [];
  public show_create_eth_account:boolean;
  show_signup_:boolean;
  public validation_error:boolean;
  emails;
public show_login_message;
public display_to_fill_1;
public privatekey_error_1:boolean;
privatekey_error:boolean
public display_to_fill_2;
public privatekey_error_2:boolean;
public show_signup_or_login_message:boolean;
public invalid_details_error:boolean;
public password_change_message:boolean;

  constructor(private grab:GrabitService,private route:Router){
    
    // window.onbeforeunload=function(){
    //   return "Sure";
    //   }

    this._web3 = this.grab._web3;
    this.show_create_account=false;
    this.show_login_message=false;
    this.display_to_fill_1=false;
  }

  Change_content(){
   this.display_to_fill_1=false;
   this.show_create_account=false;
   this.show_signup=true;
  }

  navigate(){
   this.display_to_fill_1=false;
    this.show_account_details=false;
    this.show_signup=true;
  }  

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  sign_up(name,email,password,private_key,choice,signup_choice){ 
    this.display_to_fill_1=false;
    this.display_to_fill_2=false;
    this.privatekey_error_1=false;
    this.privatekey_error_2=false;
       
    if(name.trim() !="" && email.trim() !="" && password.trim() != "" && private_key.trim() != ""){
    let access=this;
    let detail={};
    var privatekey=private_key.trim();
    if(privatekey.length!=64){
      privatekey=privatekey.substring(2,privatekey.length)
    }
    detail['fullName']=name;
    detail['email']=email;
    detail['password']=password;
    detail['publickey']=privatekey;
    let user:any =detail;
    access.grab.setPrivateKey(privatekey).then(res=>{
      detail['publickey']=access.grab._etherumAccountAddress;
      if(res==true){
        access.grab.postUser(user).subscribe(
          res => {
            access.show_login_message = true;
            setTimeout(() => {access.show_login_message = false;}, 10000);
            if(signup_choice==3){
              privatekey=null;
              (document.getElementById("signupname")as HTMLInputElement).value="";
              (document.getElementById("signupemail")as HTMLInputElement).value="";
              (document.getElementById("signuppassword")as HTMLInputElement).value="";
              (document.getElementById("signupprikey")as HTMLInputElement).value="";
              }
              else if(signup_choice==4){
              this.private_key=null;
              (document.getElementById("signupethname")as HTMLInputElement).value="";
              (document.getElementById("signupethemail")as HTMLInputElement).value="";
              (document.getElementById("signupethpassword")as HTMLInputElement).value="";
              (document.getElementById("signupethprikey")as HTMLInputElement).value="";              
              }
              this.showCreateAccount(3);
              // this.show_error=false;
            this.show_login_message=true;          
          },
          err => {
            if (err.status === 422) {
              access.show_error=true;
              access.error_message = err.error.join('<br/>');
            }
            else{
              access.error_message = 'Something went wrong.Please contact admin.';
            }
          }
        );
      }
      else if(res== false){
        if(choice==1)
        {
          this.privatekey_error_1=true;
          
        }else if(choice==2)
        {
          this.privatekey_error_2=true;
        }
        
      }
    })
  }
  else{
    if(choice==1)
    {
      this.display_to_fill_1=true;
      
    }else if(choice==2)
    {
      this.display_to_fill_2=true;
    }
    
  }    
  }


  create(){
    let object=this._web3.eth.accounts.create();
    this.account_address=object['address'];
    this.private_key=object['privateKey'].substring(2); 
  }

  showCreateAccount(num){
    var instance=this;
    if(num==1){
      instance.show_signup_=true;
      instance.show_create_eth_account=false;
    }
    else if(num==2){    
      instance.show_create_eth_account=true;
      instance.show_signup_=false;
      instance.create();
    }
    else if(num==3){
      instance.show_error=false;
      if(instance.show_signup_==true){
        instance.show_signup_=false;        
      }
      else if(instance.show_create_eth_account==true){
        instance.show_create_eth_account=false;
      }    
    }
  }

  login(name,password,privatekey){
    this.privatekey_error_1=false;
    this.validation_error=false;
    if(name.trim() !=""  && password.trim() != "" && privatekey.trim() != ""){
    let _detail:any={};
    _detail['email']=name;
    _detail['password']=password;
    _detail['publickey']=privatekey;
    var access = this;
    access.validation_error=false;
    access.privatekey_error_1=false;
    access.grab.setPrivateKey(privatekey).then(res=>{
      _detail['publickey']=access.grab._etherumAccountAddress;
      if(res==true){
        access.grab.login(_detail).subscribe(
          res => {           
            access.grab.setToken(res['token']);
            access.grab.owner().then(owneraddress=>{
              if(owneraddress==access.grab._etherumAccountAddress){
                access.route.navigate(['/owner']);
              }
              else{
                access.route.navigate(['/user']);
              }
            }),
            (document.getElementById("email")as HTMLInputElement).value="";
            (document.getElementById("password")as HTMLInputElement).value="";
            (document.getElementById("priv")as HTMLInputElement).value="";
          },
          err => {        
            access.show_login_error=true;
            access.login_error_message=err.error.message;
            access.serverErrorMessages = err.error.message;
          }
        );
      }
      else if(res== false){
        this.privatekey_error_1=true;
      }
    }) 
  }
  else{
    this.validation_error=true;
  }   
  }

  revert(){
    let ins=this;
    
    ins.password_change_message=false;
    ins.invalid_details_error=false;
    ins.validation_error=false;
    ins.privatekey_error=false;
    document.documentElement.scrollTop = 0;
  }

  forgotpassword(email,privatekey,newpass){
    this.password_change_message=false;
    this.invalid_details_error=false;
    if(email.trim() !=""  && newpass.trim() != "" && privatekey.trim() != ""){
    var instance=this;
    instance.grab.setPrivateKey(privatekey).then(res=>{
      if(!res)
      {
        instance.invalid_details_error=true;
      }
      else{
      var temp1={}
      temp1['email']=email;
      temp1['publickey']=instance.grab._etherumAccountAddress;;
      temp1['password']=newpass;
      instance.grab.forgotpassword(temp1).subscribe(
        res=>{
          (document.getElementById("forgotemail")as HTMLInputElement).value="";
          (document.getElementById("forgotpassword")as HTMLInputElement).value="";
          (document.getElementById("forgotprikey")as HTMLInputElement).value="";
          instance.password_change_message=true;
          document.documentElement.scrollTop = 0;
        },
        err=>{
          console.log(err.error.message)
          instance.invalid_details_error=true;
        }
      );
    }
    })
  }
  else{
    this.invalid_details_error=true;
  }
  }

  destroy()
  {
    (document.getElementById("forgotemail") as HTMLInputElement).value='';
    (document.getElementById("forgotprikey") as HTMLInputElement).value='';
    (document.getElementById("forgotpassword") as HTMLInputElement).value='';
  }

   check(){
  //   $("window").scrollTop(0);
  }

  show_auctions(){
    let instance = this;
    instance.grab.getauctiondetails().then(res=>{
      let data = Object.keys(res[1]).length;
      for(let i=0;i<data;i++){
        if(res[1][i]['Auctionstatus']==true){
          instance.grab.auctionDetails(res[1][i]['auctionid']).then(pro_det => {
            let obj ={};
            obj['ProductName'] = res[1][i]['productname'];
            obj['Auction_Id'] = res[1][i]['auctionid'];
            obj['ipfshash']='https://ipfs.infura.io/ipfs/'+res[1][i]['ipfshash'];
            obj['Amount'] = pro_det['basePrice'];
            obj['bidIncrement'] = pro_det['bidIncrement'];
            obj['Bidder_name'] = res[1][i]['biddername'];
            instance.images.push(obj);
          })
        }
      }
    })
  }

  move(){
    document.documentElement.scrollTop = 0;
    this.show_signup_or_login_message=true;
  }

  ngOnInit() { 
    window.onbeforeunload=function(){
      return "Sure";
      }
      
    this.show_auctions();
  }
}