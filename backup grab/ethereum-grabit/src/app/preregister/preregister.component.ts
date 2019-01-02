import { Component, OnInit } from '@angular/core';
import {GrabitService} from '../service/grabit.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-preregister',
  templateUrl: './preregister.component.html',
  styleUrls: ['./preregister.component.css']
})
export class PreregisterComponent implements OnInit {
  public canshow:boolean;
  public sec_shower:number[]=[];
  public min_shower:number[]=[];
  public hour_shower:number[]=[];
  public register_now=[];
  public expired=[];
  public upcoming=[];
  public success_message:boolean;
  public error_message:boolean;
  constructor(private grab:GrabitService,private spin:NgxSpinnerService,private user:UserComponent) { 
    this.preregister_table();
    this.success_message=false;
    this.error_message=false;
  }

  change_state(){
    this.success_message=false;
    this.error_message=false;
  }
  preregistration(auctionid){
    let ins=this;
    ins.success_message=false;
    ins.error_message=false;
    ins.grab.ispreregistered(auctionid).then(isregistered=>{
      if(isregistered==0){
        ins.spin.show();
        
      ins.grab.preregister(auctionid).then(res=>{
        ins.spin.hide();
        if(res==0){
          ins.error_message=true;
        }
        else if(res==1)
        {
          ins.user.load_credits();
          ins.success_message=true;

        }
        else{
          ins.error_message=true;
        }
      })
    }
    else{
      // alert("User already registered");
    }
    })
  }

  startTimerUpcoming(auctionid) {
    let meta =this;
    meta.grab.auctionDetails(auctionid).then(auc_det => {
      meta.grab.currentTime().then(now_time => {
          let timeLeft = Number(auc_det[0][2]) - Number(now_time);
          meta.sec_shower[auctionid]=timeLeft%60;
          let min_str:string = (timeLeft/60).toString();
          let min = min_str.split(".");
          let minutes=Number(min[0])
           meta.min_shower[auctionid]=minutes%60;
          let hours_str:string = (timeLeft/3600).toString();
          let hours= hours_str.split(".");
          meta.hour_shower[auctionid] = Number(hours[0]);
          var looper = setInterval(()=>{
            if(meta.sec_shower[auctionid]!=0){
              meta.sec_shower[auctionid]--;
            }
            else{
              if(meta.hour_shower[auctionid] !=0 || meta.min_shower[auctionid] !=0 ){
                meta.sec_shower[auctionid]=59;
                if(meta.min_shower[auctionid] != 0){
                  meta.min_shower[auctionid]--;
                }
                else{
                  if(meta.hour_shower[auctionid] !=0){
                    meta.min_shower[auctionid] = 59;
                    meta.hour_shower[auctionid]--;
                  }
                  else{
                    clearInterval(looper);
                    this.preregister_table();
                  }
                }
              }
            }
          },1000);
      })
    })
  }
  startTimerlive(auctionid) {
    let meta =this;
    meta.grab.auctionDetails(auctionid).then(auc_det => {
      meta.grab.currentTime().then(now_time => {
          let timeLeft = Number(auc_det[0][3]) - Number(now_time);
          meta.sec_shower[auctionid]=timeLeft%60;
          let min_str:string = (timeLeft/60).toString();
          let min = min_str.split(".");
          let minutes=Number(min[0])
           meta.min_shower[auctionid]=minutes%60;
          let hours_str:string = (timeLeft/3600).toString();
          let hours= hours_str.split(".");
          meta.hour_shower[auctionid] = Number(hours[0]);
          var looper = setInterval(()=>{
            if(meta.sec_shower[auctionid]!=0){
              meta.sec_shower[auctionid]--;
            }
            else{
              if(meta.hour_shower[auctionid] !=0 || meta.min_shower[auctionid] !=0 ){
                meta.sec_shower[auctionid]=59;
                if(meta.min_shower[auctionid] != 0){
                  meta.min_shower[auctionid]--;
                }
                else{
                  if(meta.hour_shower[auctionid] !=0){
                    meta.min_shower[auctionid] = 59;
                    meta.hour_shower[auctionid]--;
                  }
                  else{
                    clearInterval(looper);
                    this.preregister_table();
                  }
                }
              }
            }
          },1000);
      })
    })
  }

  preregister_table(){    
    this.grab.getauctiondetails().then(details=>{
 
      this.register_now.length=0;
      this.expired.length=0;
      this.upcoming.length=0;
      console.log(details[0].length);
      details[0].forEach(a=>{
        let i=a+1;
        this.grab.auctionDetails(i).then(result=>{
          this.grab.currentTime().then(now=>{   
              if(Number(now) >= Number(result['times'][2]) &&Number(now) <= Number(result['times'][3]))
              {
                this.grab.ispreregistered(i).then(state=>{
                  // console.log(i+" "+"In Live");
                  let data1={};
                  data1['Auction_Id']=details[1][a]['auctionid']
                  data1['Url']='https://ipfs.infura.io/ipfs/'+details[1][a]['ipfshash'];
                  data1['ProductName']=details[1][a]['productname'];
                  data1['resetTime']=result['resetTime'];
                  data1['bidIncrement']=result['bidIncrement'];
                  data1['Amount']=result['basePrice'];
                  data1['status']=state; 
                  data1['required']=result['bidBounds'][1];
                  data1['registered']=result['bidBounds'][3];
                  data1['minimumbid']=result['bidBounds'][0];                  
                  if(86400<Number(result['times'][3]) - Number(now)){
                      data1['timeshow']=false;
                      // alert(i);
                      data1['datedata']= ((Number(result['times'][2]) - Number(now))/86400).toString().split(".")[2]+" Day to go";
                      // alert(data1['datedata'])
                    } 
                    else{
                      data1['timeshow']=true;
                      this.startTimerlive(i);
                    }
                    
                    // data1['datedata']="undefined";
                    this.register_now.push(data1); 
                  })
                  
              } 
              else if(Number(now) >= Number(result['times'][3]))
              {
                  // console.log(i+" "+"Expired");
                this.grab.ispreregistered(i).then(state=>{
                  let data1={};
                  data1['Auction_Id']=details[1][a]['auctionid']
                  data1['Url']='https://ipfs.infura.io/ipfs/'+details[1][a]['ipfshash'];
                  data1['ProductName']=details[1][a]['productname'];
                  data1['resetTime']=result['resetTime'];
                  data1['bidIncrement']=result['bidIncrement'];
                  data1['Amount']=result['basePrice'];
                  data1['status']=state;
                  data1['required']=result['bidBounds'][1];
                  data1['registered']=result['bidBounds'][3];
                  data1['minimumbid']=result['bidBounds'][0];     
                  
                  this.expired.push(data1); 
                });
              } 
            else 
              {
                  // console.log(i+" "+"Upcoming");
                  // alert(i);
                  // console.log(a);
                  let data1={};
                  data1['Auction_Id']=details[1][a]['auctionid']
                  data1['Url']='https://ipfs.infura.io/ipfs/'+details[1][a]['ipfshash'];
                  data1['ProductName']=details[1][a]['productname'];
                  data1['resetTime']=result['resetTime'];
                  data1['bidIncrement']=result['bidIncrement'];
                  data1['Amount']=result['basePrice'];
                  data1['required']=result['bidBounds'][1];
                  data1['registered']=result['bidBounds'][3];
                  data1['minimumbid']=result['bidBounds'][0];                  

                  if(86400<Number(result['times'][2]) - Number(now)){
                      data1['timeshow']=false;
                      // alert(i);
                      data1['datedata']= ((Number(result['times'][2]) - Number(now))/86400).toString().split(".")[2]+" Day to go";
                      // alert(data1['datedata'])
                    } 
                    else{
                      data1['timeshow']=true;
                      this.startTimerUpcoming(i);
                    }
                    
                    // data1['datedata']="undefined";
                    this.upcoming.push(data1); 
                    // alert(this.upcoming_images_)    
                  
              }
        })
      })
    })
  })
}

  ngOnInit() {
  }

}
