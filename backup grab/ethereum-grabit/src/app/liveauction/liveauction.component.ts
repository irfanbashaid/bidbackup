import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-liveauction',
  templateUrl: './liveauction.component.html',
  styleUrls: ['./liveauction.component.css']
})
export class LiveauctionComponent implements OnInit {
public canshow:boolean;
public images=[];
public canstop:boolean;
public successful_message:boolean;
public not_successful_error:boolean;
public last_bidder_message:boolean;
public basePrice_reached:boolean;
public current_auctionId;

public spin:NgxSpinnerService
  constructor(private grabit:GrabitService,private user:UserComponent,private route:Router) {
      this.live_bids();
  }

  public sec_shower:number[]=[];
  public min_shower:number[]=[];
  public hour_shower:number[]=[];
  

  expiry_timer(auctionid,arr_index) {
    let meta =this;
    meta.grabit.lastBidderDetails(auctionid).then(lastbid => {
      meta.grabit.auctionDetails(auctionid).then(auc_det => {
        meta.grabit.currentTime().then(now_time => {
          let timeLeft = Number(auc_det[0][1]) - Number(now_time);
          meta.sec_shower[auctionid]=timeLeft%60;
          let min_str:string = (timeLeft/60).toString();
          let min = min_str.split(".");
          let minutes=Number(min[0])
          meta.min_shower[auctionid]=minutes%60;
          let hours_str:string = (timeLeft/3600).toString();
          let hours= hours_str.split(".");
          meta.hour_shower[auctionid] = Number(hours[0]);
          let checker = lastbid;
          if(typeof(lastbid)==typeof("string")){
            checker = "";
          }
          else{
            checker = lastbid.returnValues.bidder;
          }
          var looper = setInterval(()=>{
            meta.grabit.lastBidderDetails(auctionid).then(newbid => {
              if(newbid.returnValues !== undefined){
                if(checker != newbid.returnValues.bidder){
                  meta.grabit.getUserName(newbid.returnValues.bidder).subscribe(username =>{
                    meta.images[arr_index]['Bidder_name']=username['fullName'];
                    meta.images[arr_index]['last_Bidded_amount']=newbid['returnValues'].amount;
                    meta.images[arr_index]['buttonbid']=Number(auc_det['bidIncrement'])+Number(newbid['returnValues'].amount);
                    checker = newbid.returnValues.bidder;
                    clearInterval(looper);
                    meta.expiry_timer(auctionid,arr_index);
                  })
                }
              }
            })
            if(meta.hour_shower[auctionid] ==0 && meta.min_shower[auctionid]==0 && meta.sec_shower[auctionid]==0)
            {
              meta.images[arr_index]['buttonbid']=0;
              // (document.getElementById(meta.images[arr_index]['buttonbid']) as HTMLButtonElement).value='Closed';
              // (document.getElementById(meta.images[arr_index]['buttonbid']) as HTMLButtonElement).disabled=true;
              clearInterval(looper); 
            }
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
                  else {
                    
                  }
                }
              }
            }
          },1000);
        })
      })
    })
  }
 
  live_bids(){
    console.log('Displaying Live Bids...');
    this.grabit.getauctiondetails().then(details=>{
      details[0].forEach(a=>{
        let i=a+1;
        this.grabit.auctionDetails(i).then(result=>{
          this.grabit.lastBidderDetails(i).then(res=>{
            this.grabit.currentTime().then(now=>{
              if((now >= result['times'][0]) && (now <result['times'][1])){
                this.grabit.ispreregistered(i).then(state=>{
                    let data={};
                    data['Auction_Id']=details[1][a]['auctionid']
                    data['Url']='https://ipfs.infura.io/ipfs/'+details[1][a]['ipfshash'];
                    data['ProductName']=details[1][a]['productname'];
                    data['Amount']=result['basePrice'];
                    data['resetTime']=result['resetTime'];
                    data['bidIncrement']=result['bidIncrement'];
                    data['status']=state;
                    data['required']=result['bidBounds'][1];
                    data['registered']=result['bidBounds'][3];
                    data['minimumbid']=result['bidBounds'][0];                  

                    if(res == 'No Bid Logs Found'){
                      data['last_Bidded_amount']=0;
                      data['buttonbid']=Number(result['bidIncrement'])+Number(result['bidBounds'][0])
                    }
                    else{
                      data['last_Bidded_amount']=res['returnValues'].amount;
                      data['buttonbid']=Number(result['bidIncrement'])+Number(res['returnValues'].amount);
                      this.grabit.getUserName(res.returnValues.bidder).subscribe(username =>{
                        data['Bidder_name']=username['fullName'];
                      })
                    }
                    if(86400<Number(result['times'][1]) - Number(now)){
                      data['timeshow']=true;
                      data['datedata']= ((Number(result['times'][1]) - Number(now))/86400).toString().split(".")[0]+" Day to Expire";
                    }
                    this.expiry_timer(i,this.images.length);
                    this.images.push(data);
                  })
              }
            })
          })
        })
      })
    })
  }
  
  zoom_product(ProductName,Amount,Url,Auction_Id,bidIncrement,last_Bidded_amount,Bidder_name,buttonbid,resetTime,datedata,timeshow){
    let obj ={};
    obj["ProductName"]=ProductName;
    obj["Amount"]=Amount;
    obj["Url"]=Url;
    obj["Auction_Id"]=Auction_Id;
    obj["bidIncrement"]=bidIncrement;
    obj["last_Bidded_amount"]=last_Bidded_amount;
    obj["Bidder_name"]=Bidder_name;
    obj["buttonbid"]=buttonbid;
    obj["resetTime"]=resetTime;
    obj["datedata"]=datedata;
    obj["timeshow"]=timeshow;
    this.grabit.prod_zoom = obj;
    this.grabit.imgshow=!this.grabit.imgshow;
  }
  
  manualBidding(_aID){
    let instance = this;
    instance.current_auctionId=_aID;
    instance.successful_message=false;
    instance.not_successful_error=false;
    instance.last_bidder_message=false;
    instance.basePrice_reached =false;
    instance.grabit.lastBidderDetails(_aID).then(res=>{
      instance.grabit.auctionDetails(_aID).then(result => {console.log(result[1])
        if(res == 'No Bid Logs Found'){
          let amount=0;
          while(amount<=result[3][0]){
            amount = Number(amount)+Number(result[2]);
            if(amount>result[3][0]){
              if(result[1]>=amount){
                instance.user.spinner.show();
                instance.grabit.manualBidding(_aID,amount).then(res => {
                  instance.user.spinner.hide();
                  if(res==1){
                    instance.successful_message=true;
                    instance.successful_message=true;
                    let ins=new UserComponent(this.grabit,this.route,this.spin);
                    ins.load_credits();
                  }
                  else if(res ==2){
                    instance.not_successful_error=true;
                  }
                  else{
                    instance.not_successful_error=true;
                  }
                })
              }
              else{
                instance.basePrice_reached =true;
              }
            }
          }
          return;
        }
        else if(res['returnValues'].bidder==this.grabit._etherumAccountAddress){
          instance.last_bidder_message=true;
          return;
        }
        else{
          if(result[5][0] != 0){
            instance.user.spinner.show();
            let amount =Number(result[5][0])+Number(result[2]);
            if(result[1]>=amount){
              instance.grabit.manualBidding(_aID,amount).then(res => {
                instance.user.spinner.hide();
                if(res==1){
                  instance.successful_message=true;
                  let ins=new UserComponent(this.grabit,this.route,this.spin);
                  ins.load_credits();
                }
                else if(res ==2){
                  instance.not_successful_error=true;
                  instance.user.spinner.hide();
                }
                else{
                  instance.not_successful_error=true;
                  instance.user.spinner.hide();
                }
              })
            }
            else{
              instance.basePrice_reached =true;
              instance.user.spinner.hide();

            }
          }
        }
      })
    })
  }

  ngOnInit() {
  }

}