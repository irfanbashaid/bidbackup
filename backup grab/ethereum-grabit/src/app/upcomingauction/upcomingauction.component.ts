import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';

@Component({
 selector: 'app-upcomingauction',
 templateUrl: './upcomingauction.component.html',
 styleUrls: ['./upcomingauction.component.css']
})

export class UpcomingauctionComponent implements OnInit {

 public canshow:boolean;
 public images=[];
 public sec_shower:number[]=[];
 public min_shower:number[]=[];
 public hour_shower:number[]=[];
public 
 constructor(private grabit:GrabitService) {
   console.log('Displaying Upcoming Bids...')
   this.upcoming_table();
 }

 startTimer(auctionid) {
   let meta =this;
   meta.grabit.auctionDetails(auctionid).then(auc_det => {
     meta.grabit.currentTime().then(now_time => {

         let timeLeft = Number(auc_det[0][0]) - Number(now_time);
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
                   this.upcoming_table();
                 }
               }
             }
           }
         },1000);
       // }
     })
   })
 }

 zoom_product(ProductName,Amount,Url,Auction_Id,bidIncrement,buttonbid,resetTime,datedata){
   let obj ={};
   obj["ProductName"]=ProductName;
   obj["Amount"]=Amount;
   obj["Url"]=Url;
   obj["Auction_Id"]=Auction_Id;
   obj["bidIncrement"]=bidIncrement;
   // obj["last_Bidded_amount"]=last_Bidded_amount;
   // obj["Bidder_name"]=Bidder_name;
   obj["buttonbid"]=buttonbid;
   obj["resetTime"]=resetTime;
   obj["datedata"]=datedata;
   this.grabit.prod_zoom = obj;
   this.grabit.imgshow=!this.grabit.imgshow;
 }

 upcoming_table(){
   this.grabit.getauctiondetails().then(details=>{
     details[0].forEach(a=>{
       let i=a+1;
       this.grabit.auctionDetails(i).then(result=>{
         this.grabit.currentTime().then(now=>{
           if(now  < result['times'][0]){
             this.grabit.ispreregistered(i).then(state=>{
             let data={};
             data['Auction_Id']=details[1][a]['auctionid']
             data['Url']='https://ipfs.infura.io/ipfs/'+details[1][a]['ipfshash'];
             data['ProductName']=details[1][a]['productname'];
             data['resetTime']=result['resetTime'];
             data['bidIncrement']=result['bidIncrement'];
             data['Amount']=result['basePrice'];
             data['datedata']="undefined";
             data['required']=result['bidBounds'][1];
             data['registered']=result['bidBounds'][3];
             data['minimumbid']=result['bidBounds'][0];                  

             if(86400<Number(result['times'][0]) - Number(now)){
               data['timeshow']=true;
               data['datedata']= ((Number(result['times'][0]) - Number(now))/86400).toString().split(".")[0]+" Day to go";
             }
             data['status']=state;
             this.startTimer(i);
             this.images.push(data);
            })
        }
       })
     })
   })
 })
}

 ngOnInit() {
 }

}