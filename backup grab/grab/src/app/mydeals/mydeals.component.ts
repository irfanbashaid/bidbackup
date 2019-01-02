import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { AppComponent } from '../app.component';
declare let $:any;
declare let simplyCountdown:any;

@Component({
  selector: 'app-mydeals',
  templateUrl: './mydeals.component.html',
  styleUrls: ['./mydeals.component.css']
})
export class MydealsComponent implements OnInit {

    public mydealcontent:number = 1;
    public myRegDealArray=[];
    public noActiveDeal:boolean = false;
    public sec_shower:number[]=[];
    public min_shower:number[]=[];
    public hour_shower:number[]=[];
    public last_bidder_message:boolean;
    public basePrice_reached:boolean;
    public bidPlacedMsg:boolean;
    public bidNotPlacedMsg:boolean;
    public grabBalance:number;
    public myExpDealArray=[];
    public noMyExpDeal:boolean = false;
    
    constructor(private grab:GrabitService,private app:AppComponent) { 
        // let obj = {};
        // obj["productname"] = "Nokia";
        // obj["timeleft"] = "20:26:01";
        // obj["ipfsimghash"] = "QmS93z8tE8MHKGNv4RYvfA1ZaxNijLj7XDG6z2mfBfA3hW";
        // obj["highestbidamount"] = "2500";
        // obj["nextbidamount"] = "3000";
        // obj["timertext"] = "Hours";
        // this.myRegDealArray.push(obj);
        // this.myRegDealArray.push(obj);
        // this.myRegDealArray.push(obj);
        this.loadmyRegDealArray();
        this.load_credits();
    }

    dismiss_bidNotPlacedMsg(){
        let meta = this;
        meta.bidNotPlacedMsg = false;
    }

    dismiss_bidPlacedMsg(){
        let meta = this;
        meta.bidPlacedMsg = false;
    }

    dismiss_last_bidder_message(){
        let meta = this;
        meta.last_bidder_message = false;
    }

    dismiss_basePrice_reached(){
        let meta = this;
        meta.basePrice_reached = false;
    }

  setdealcontent(contentid){
    let meta = this;
    meta.mydealcontent = contentid;
  }

    loadmyRegDealArray(){
        let instance = this;
        instance.myRegDealArray.length = 0;
        instance.grab.getauctiondetails().then(details=>{
            details[0].forEach(a=>{
                let i=a+1;
                instance.grab.auctionDetails(i).then(result=>{
                    instance.grab.currentTime().then(now=>{
                        instance.grab.ispreregistered(i).then(isPreRegistered =>{
                            if(isPreRegistered == 1){
                                instance.grab.lastBidderDetails(i).then(newbid => {
                                    if((Number(result['times'][0]) < Number(now))&&(Number(result['times'][1]) > Number(now))){
                                        let checker = newbid;
                                        if(typeof(newbid)==typeof("string")){
                                            checker = "";
                                        }
                                        else{
                                            checker = newbid.returnValues.bidder;
                                        }
                                        let obj ={};
                                        obj['auctionid']=i;
                                        obj["productname"] = details[1][a]['productname'];
                                        obj["ipfsimghash"] = details[1][a]['ipfshash'];
                                        obj["resettime"]=result['resetTime'];
                                        obj["bidincrement"]=result['bidIncrement'];
                                        obj["baseprice"]=result['basePrice'];
                                        obj['required']=result['bidBounds'][1];
                                        obj['registered']=result['bidBounds'][3];
                                        obj['minimumbid']=result['bidBounds'][0];
                                        obj['Bidder_name'] = "";
                                        obj["nextbidamount"] = Number(result['bidIncrement']);
                                        obj["highestbidamount"] = 0;
                                        if(checker != ""){
                                            instance.grab.getUserName(checker).subscribe(username =>{
                                                obj['Bidder_name']=username['fullName'];
                                            })
                                            obj["nextbidamount"] = Number(result['bidIncrement'])+Number(newbid['returnValues'].amount);
                                            obj["highestbidamount"] = newbid['returnValues'].amount;
                                        }
                                        obj['ismeetrequired'] = false;
                                        if(Number(result['bidBounds'][1])<=Number(result['bidBounds'][3])){
                                            obj['ismeetrequired'] = true;
                                            instance.expiry_timer(i,instance.myRegDealArray.length);
                                        }
                                        instance.noActiveDeal = false;
                                        instance.myRegDealArray.push(obj);
                                    }
                                    else if(Number(result['times'][1]) <= Number(now)){
                                        if(Number(result['bidBounds'][1])<=Number(result['bidBounds'][3])){//expected met
                                            let obj2 ={};
                                            instance.grab.Particular_bid_details(i).then(totbidamt => {
                                                obj2["totalBidAmount"] = totbidamt;
                                            });
                                            obj2["productname"] = details[1][a]['productname'];
                                            obj2["ipfsimghash"] = details[1][a]['ipfshash'];
                                            obj2['auctionid']=i;
                                            obj2["expDate"] = new Date(result['times'][1]*1000);
                                            obj2["winamount"] = 0;
                                            if(typeof(newbid)==typeof("string")){
                                                obj2["winner"] = "No One";
                                            }
                                            else{
                                                instance.grab.getUserName(newbid.returnValues.bidder).subscribe(username =>{
                                                    obj2["winner"] =username['fullName'];
                                                })
                                                obj2["winamount"] = newbid['returnValues'].amount;                                                
                                            }
                                            instance.noMyExpDeal = false;
                                            instance.myExpDealArray.push(obj2);                                            
                                        }
                                    }
                                })
                            }
                            if(details[0].length==i){
                                (()=>{
                                    setTimeout(()=>{
                                        instance.noActiveDeal = false;
                                        if(instance.myRegDealArray.length==0){
                                            instance.noActiveDeal = true;
                                        }
                                        if(instance.myExpDealArray.length == 0){
                                            instance.noMyExpDeal = true;
                                        }
                                    },200);
                                })();
                            }                            
                        })
                    })
                })
            })
        })
    }
    load_credits(){
        let meta = this;
        meta.grab.balanceOf().then(res=>{
            meta.grabBalance=res;
        })
      }
    manualBidding(_aID){
        let instance = this;
        instance.last_bidder_message=false;
        instance.basePrice_reached =false;
        instance.bidNotPlacedMsg = false;
        instance.bidPlacedMsg=false;
        instance.grab.lastBidderDetails(_aID).then(res=>{
            instance.grab.auctionDetails(_aID).then(result => {
                if(res == 'No Bid Logs Found'){
                    let amount=0;
                    while(amount<=result[3][0]){
                        amount = Number(amount)+Number(result[2]);
                        if(amount>result[3][0]){
                            if(result[1]>=amount){
                                instance.app.spinner.show();
                                instance.grab.manualBidding(_aID,amount).then(res => {
                                instance.app.spinner.hide();
                                    if(res==1){
                                        instance.bidPlacedMsg=true;
                                        instance.load_credits();
                                    }
                                    else if(res ==2){
                                        instance.bidNotPlacedMsg=true;
                                    }
                                    else{
                                        instance.bidNotPlacedMsg=true;
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
                else if(res['returnValues'].bidder==this.grab._etherumAccountAddress){
                    instance.last_bidder_message=true;
                    return;
                }
                else{
                    if(result[5][0] != 0){
                        let amount =Number(result[5][0])+Number(result[2]);
                        if(result[1]>=amount){
                            instance.app.spinner.show();
                            instance.grab.manualBidding(_aID,amount).then(res => {
                                instance.app.spinner.hide();
                                if(res==1){
                                    instance.bidPlacedMsg=true;
                                    instance.load_credits();
                                }
                                else if(res ==2){
                                    instance.bidNotPlacedMsg=true;
                                }
                                else{
                                    instance.bidNotPlacedMsg=true;
                                }
                            })
                        }
                        else{
                            instance.basePrice_reached =true;
                        }
                    }
                }
            })
        })

    }
    expiry_timer(auctionid,arr_index) {
        let meta =this;
        meta.grab.lastBidderDetails(auctionid).then(lastbid => {
            meta.grab.auctionDetails(auctionid).then(auc_det => {
                meta.grab.currentTime().then(now_time => {
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
                        meta.grab.lastBidderDetails(auctionid).then(newbid => {
                            if(newbid.returnValues !== undefined){
                                if(checker != newbid.returnValues.bidder){
                                    meta.grab.getUserName(newbid.returnValues.bidder).subscribe(username =>{
                                        meta.myRegDealArray[arr_index]['Bidder_name']=username['fullName'];
                                        meta.myRegDealArray[arr_index]['highestbidamount']=newbid['returnValues'].amount;
                                        meta.myRegDealArray[arr_index]['nextbidamount']=Number(auc_det['bidIncrement'])+Number(newbid['returnValues'].amount);
                                        checker = newbid.returnValues.bidder;
                                        clearInterval(looper);
                                        meta.expiry_timer(auctionid,arr_index);
                                    })
                                }
                            }
                        })
                        if(meta.hour_shower[auctionid] ==0 && meta.min_shower[auctionid]==0 && meta.sec_shower[auctionid]==0)
                        {
                            meta.myRegDealArray[arr_index]['nextbidamount']=0;
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
                });
            });
        });
      }

  ngOnInit() {

    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                900: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 20
                }
            }
        })
    })

    $(document).ready(function() {
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                $(this).toggleClass('open');
            }
        );
    });

    $(document).ready(function($) {
        $(".scroll").click(function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 900);
        });
    });

    $(document).ready(function() {
        $().UItoTop({
            easingType: 'easeOutQuart'
        });
    });
    
  }

}
