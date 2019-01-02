import { Component, OnInit } from '@angular/core';
import { GrabitService } from "../service/grabit.service";
import { NgxSpinnerService } from 'ngx-spinner';
import { UserComponent } from '../user/user.component';
import { Router } from '@angular/router';
@Component({
 selector: 'app-viewauction',
 templateUrl: './viewauction.component.html',
 styleUrls: ['./viewauction.component.css']
})

export class ViewauctionComponent implements OnInit {

  public hour_shower;
  public min_shower;
  public sec_shower;
  public btn_show:boolean;
  public btn_show_upcoming:boolean;
  public btn_show_closed:boolean;
  public bidder_history=[];
  public current_id;
  public timeshow:boolean;
  public successful_message:boolean;
  public last_Bidder_message:boolean; 
  public not_successful_error:boolean;
  public basePrice_reached:boolean;
  // public spin:NgxSpinnerService
  constructor(private grabit:GrabitService,private spin:NgxSpinnerService,private user:UserComponent,private route:Router) {
    this.startTimer();
  }

  startTimer() {
    let meta =this;
    let auctionid = meta.grabit.prod_zoom["Auction_Id"];
    if(meta.grabit.prod_zoom["datedata"]!="undefined"){
      meta.timeshow = true;
    }
    meta.get_history(auctionid);
    meta.grabit.auctionDetails(auctionid).then(auc_det => {
      this.grabit.ispreregistered(auctionid).then(state=>{

      meta.grabit.prod_zoom['required']=auc_det['bidBounds'][1];
      meta.grabit.prod_zoom['registered']=auc_det['bidBounds'][3];
      meta.grabit.prod_zoom['status']=state;
      meta.grabit.currentTime().then(now_time => {
        if(now_time > auc_det[0][1] ) {
          meta.btn_show_closed=true;      
        }  
        else if(now_time > auc_det[0][0]) {
          meta.btn_show=true;
          meta.timeshow = false;
          if(meta.grabit.prod_zoom["timeshow"]){
            meta.timeshow = true;
          }

          meta.grabit.lastBidderDetails(auctionid).then(lastbid => {
            let timeLeft = Number(auc_det[0][1]) - Number(now_time);
            meta.sec_shower=timeLeft%60;
            let min_str:string = (timeLeft/60).toString();
            let min = min_str.split(".");
            let minutes=Number(min[0])
            //  while(minutes>59){
            //      minutes = Number((minutes/60).toString().split(".")[0]);
            //  }
             meta.min_shower=minutes%60;
            // meta.min_shower=Number((timeLeft/60).toString().split(".")[0]);
            let hours_str:string = (timeLeft/3600).toString();
            let hours= hours_str.split(".");
            meta.hour_shower = Number(hours[0]);
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
                      meta.grabit.auctionDetails(auctionid).then(result=>{
                        console.log(result['bidBounds'][1]+" "+result['bidBounds'][3]);
                      meta.grabit.prod_zoom['Bidder_name']=username['fullName'];
                      meta.grabit.prod_zoom['last_Bidded_amount']=newbid['returnValues'].amount;
                      meta.grabit.prod_zoom['buttonbid']=Number(auc_det['bidIncrement'])+Number(newbid['returnValues'].amount);

                      checker = newbid.returnValues.bidder;
                      clearInterval(looper);
                      meta.startTimer();
                    })
                  })
                  }
                }
              })
              if(meta.sec_shower!=0){
                meta.sec_shower--;
              }
              else{
                if(meta.hour_shower !=0 || meta.min_shower !=0 ){
                  meta.sec_shower=59;
                  if(meta.min_shower != 0){
                    meta.min_shower--;
                  }
                  else{
                    if(meta.hour_shower !=0){
                      meta.min_shower = 59;
                      meta.hour_shower--;
                    }
                    else{
                      clearInterval(looper);
                      // meta.live_bids();
                    }
                  }
                }
              }
            },1000);
          })
        }
        else{ // Upcoming
          console.log("inside upcoming")
          meta.btn_show=true;
          meta.btn_show_upcoming=true;
          let timeLeft = Number(auc_det[0][0]) - Number(now_time);
          meta.sec_shower=timeLeft%60;
          let min_str:string = (timeLeft/60).toString();
          let min = min_str.split(".");
          let minutes=Number(min[0])
          //  while(minutes>59){
          //      minutes = Number((minutes/60).toString().split(".")[0]);
          //  }
           meta.min_shower=minutes%60;
          // meta.min_shower=Number((timeLeft/60).toString().split(".")[0]);
          let hours_str:string = (timeLeft/3600).toString();
          let hours= hours_str.split(".");
          meta.hour_shower = Number(hours[0]);
          var looper = setInterval(()=>{
            if(meta.sec_shower!=0){
              meta.sec_shower--;
            }
            else{
              if(meta.hour_shower !=0 || meta.min_shower !=0 ){
                meta.sec_shower=59;
                if(meta.min_shower != 0){
                  meta.min_shower--;
                }
                else{
                  if(meta.hour_shower !=0){
                    meta.min_shower = 59;
                    meta.hour_shower--;
                  }
                  else{
                    clearInterval(looper);
                  }
                }
              }
            }
          },1000);
        }
      })
    })
    })
  }

  manualBidding(_aID){
    let instance = this;
    instance.successful_message=false;
    instance.not_successful_error=false;
    instance.last_Bidder_message=false;
    instance.basePrice_reached =false;
    instance.grabit.lastBidderDetails(_aID).then(res=>{
      instance.grabit.auctionDetails(_aID).then(result => {
        if(res == 'No Bid Logs Found'){
          console.log('Congratualtions You are the First Bidder...')
          let amount=0;
          while(amount<=result[3]){
            amount = Number(amount)+Number(result[2]);
            if(amount>result[3]){
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
          instance.last_Bidder_message=true;
          
          return;
        }
        else{
          if(result[5][0] != 0){
            instance.user.spinner.show();
            instance.grabit.manualBidding(_aID,Number(result[5][0])+Number(result[2])).then(res => {
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
        }
      })
    })
  }

  get_history(id){
    let meta = this;
    meta.bidder_history.length=0;
    meta.grabit.Particular_bid_details(id).then(result=>{
      result.forEach(element => {
        meta.grabit.getUserName(element["returnValues"].bidder).subscribe(res=>{
          let obj={};
          obj['Price']=element["returnValues"].amount;
          obj['Name']=res['fullName'];
          meta.bidder_history.push(obj);
        })
      });
    })
  }

  ngOnInit() {
  }

}