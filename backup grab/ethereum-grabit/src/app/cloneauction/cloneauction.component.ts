import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cloneauction',
  templateUrl: './cloneauction.component.html',
  styleUrls: ['./cloneauction.component.css']
})
export class CloneauctionComponent implements OnInit {
  
  public auction = [];
  public selected_aid=[];
  public selected_hash;
  public productid;
  public successful_message:boolean;
  public show_valid:boolean;
  public show_revert_error:boolean;
  constructor(private grabit:GrabitService,private spin:NgxSpinnerService) {
    this.table_data();
  }

     table_data(){
      let instance = this;
      instance.grabit.getauctiondetails().then(res => {    
        res[0].forEach(auction_id=> {    
          this.grabit.auctionDetails(auction_id+1).then(result=>{  
            if(result[6]==1)
            {
              this.grabit.getAuctionById(auction_id+1).subscribe(res=>{
                  console.log(res['productname']);
                  let obj = {};
                  obj['auctionId'] = auction_id+1;
                  obj['productname'] =res['productname'];
                  instance.selected_aid.push(obj);
                });
              }
            });
           });
         });     
      }
    

    setdetails(a_id){
      (document.getElementById("productname")as HTMLInputElement).value='';
      (document.getElementById("baseprice")as HTMLInputElement).value='';
      (document.getElementById("bidincrement")as HTMLInputElement).value='';
      (document.getElementById("minimumbid")as HTMLInputElement).value='';
      (document.getElementById("resettime")as HTMLInputElement).value='';
      (document.getElementById("minbidders")as HTMLInputElement).value='';
      this.grabit.auctionDetails(a_id).then(result=>{
        this.grabit.getAuctionById(a_id).subscribe(res=>{
          console.log(res);
          this.selected_hash =res['ipfshash'];
          this.productid=a_id;
          (document.getElementById("productname")as HTMLInputElement).value=res['productname'];
          (document.getElementById("baseprice")as HTMLInputElement).value=result.basePrice;
          (document.getElementById("bidincrement")as HTMLInputElement).value=result.bidIncrement;
          (document.getElementById("minimumbid")as HTMLInputElement).value=result.bidBounds[0];
          (document.getElementById("resettime")as HTMLInputElement).value=result.resetTime;
          (document.getElementById("minbidders")as HTMLInputElement).value=result.bidBounds[1];
      });
    });
      }

    clone(productname,starttime,endtime,rgstarttime,rgendtime){
        let instance=this;
        instance.successful_message=false;
        instance.show_revert_error=false;
        instance.show_valid=false;
      if(productname.trim()!='' && starttime.trim()!='' && endtime.trim()!='' && rgstarttime.trim()!='' && rgendtime.trim()!='')
      {
        instance.spin.show();
        var t=new Date(starttime).getTime() / 1000;
        var a:any = Math.round(t);
        var _starttime:number = parseInt(a);
        var t1=new Date(endtime).getTime() / 1000;
        var a1:any = Math.round(t1);
        var _endtime:number = parseInt(a1);
        var t3=new Date(rgstarttime).getTime()/1000;
        var c:any=Math.round(t3);
        var _reg_start:number=parseInt(c);
        var t4=new Date(rgendtime).getTime()/1000;
        var d:any=Math.round(t4);
        var _reg_end:number=parseInt(d);
        instance.grabit.cloneAuction(instance.productid,_starttime,_endtime,_reg_start,_reg_end).then(res=>{
          instance.spin.hide();
          if(res==1){  
            instance.successful_message=true;
            instance.grabit.upload(instance.selected_hash,productname);
            (document.getElementById("productname")as HTMLInputElement).value="";
            (document.getElementById("starttime")as HTMLInputElement).value="";
            (document.getElementById("endtime")as HTMLInputElement).value="";
            (document.getElementById("baseprice")as HTMLInputElement).value="";
            (document.getElementById("bidincrement")as HTMLInputElement).value="";
            (document.getElementById("minimumbid")as HTMLInputElement).value="";
            (document.getElementById("resettime")as HTMLInputElement).value="";
            (document.getElementById("rgstarttime")as HTMLInputElement).value="";
            (document.getElementById("rgendtime")as HTMLInputElement).value="";
            (document.getElementById("minbidders")as HTMLInputElement).value="";
            return;
          }
          else if(res==2){
            res
            console.log('Error...');
            instance.show_revert_error=true;
            // this.show_valid=true;
          }
          else{
            // this.show_valid=true;
          }
        })
      }
      else{
        alert("Invalid details");
        instance.show_valid=true;
      }
        
    }


  ngOnInit() {
    // (document.getElementById('productid') as HTMLInputElement).value='5';
    // (document.getElementById('baseprice') as HTMLInputElement).value='5';
    // (document.getElementById('bidincrement') as HTMLInputElement).value='5';
    // (document.getElementById('minimumbid') as HTMLInputElement).value='5';
    // (document.getElementById('resettime') as HTMLInputElement).value='15';
    // (document.getElementById("minbidders")as HTMLInputElement).value="12";

    
  }

}
