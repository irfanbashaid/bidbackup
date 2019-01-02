import { Component, OnInit } from '@angular/core';
import { GrabitService } from '../service/grabit.service';
import { AppComponent } from '../app.component';

declare let simplyCountdown:any;
declare let $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public carousel_array=[];
  public notification:boolean;
  public hash_array=[];
  public alreadyRegistered:boolean = false;
  public buybidpacknotify:boolean = false;
  public uradminnotify:boolean = false;
  public noUpcoming:boolean = false;
  public waitForUpcoming:boolean=true;
  public regreqsuccessnotify:boolean = false;
  public regreqfailnotify:boolean = false;
  constructor(private grab:GrabitService,private app:AppComponent) { 
    // this.hash_array.push('QmW8FNha22kC3YC35xAExnupaqHq5M2bGoTaNiZpemmxkv')
    // this.hash_array.push('QmS93z8tE8MHKGNv4RYvfA1ZaxNijLj7XDG6z2mfBfA3hW')
    // this.hash_array.push('QmW8FNha22kC3YC35xAExnupaqHq5M2bGoTaNiZpemmxkv')
    // this.hash_array.push('QmYnBZJZV4w9GTsohm2TEi3Api3NP8emnvqkgjARerjWSc')
    // this.hash_array.push('QmW8FNha22kC3YC35xAExnupaqHq5M2bGoTaNiZpemmxkv')
    // this.hash_array.push('QmS93z8tE8MHKGNv4RYvfA1ZaxNijLj7XDG6z2mfBfA3hW')
    // this.hash_array.push('QmW8FNha22kC3YC35xAExnupaqHq5M2bGoTaNiZpemmxkv')
    // this.hash_array.push('QmYnBZJZV4w9GTsohm2TEi3Api3NP8emnvqkgjARerjWSc')
    // // this.app.spinner.show();
    // this.hash_array.forEach(hash=>{
    //   let obj={};
    //   obj['hash']=hash;
    //   obj['registered']=48;
    //   obj['required']=50
    //   obj['time']=5;
    //   this.carousel_array.push(obj);
    //   if('QmYnBZJZV4w9GTsohm2TEi3Api3NP8emnvqkgjARerjWSc'==hash){
    //     this.trigger();
    //   }
    // })
    // console.log(!this.grab.isadmin);
    this.show_auctions()
  }

  show_auctions(){
    let instance = this;
    instance.carousel_array.length = 0;
    instance.grab.getauctiondetails().then(details=>{
      details[0].forEach(a=>{
        let i=a+1;
        instance.grab.auctionDetails(i).then(result=>{
          instance.grab.currentTime().then(now=>{
            if(Number(result['times'][0]) > Number(now)){
                // (Number(result['times'][2]) > Number(now))&&(Number(result['times'][3]) < Number(now))){
              instance.grab.ispreregistered(i).then(isPreRegistered =>{
                let obj ={};
                obj['auctionid']=i;
                obj['hash']=details[1][a]['ipfshash'];
                obj['required']=result['bidBounds'][1];
                obj['registered']=result['bidBounds'][3];
                obj['time']= new Date(result['times'][0]*1000);//bid start time
                obj['regstarttime'] = result['times'][2];
                // obj['regendtime'] = result['times'][3];
                obj['minBid']=result['bidBounds'][0];
                obj['regtxt'] = 'register';
                obj['regbtnshow'] = true;
                obj['beforereg']=false;
                obj['isclosed'] = false;
                if(Number(result['times'][2]) > Number(now)){
                  //before registeration starts
                  obj['regbtnshow'] = false;
                  obj['beforereg'] = true;
                }
                else if(Number(result['times'][3]) < Number(now)){
                  obj['regbtnshow'] = false;
                  obj['isclosed'] = true;
                }
                else if(isPreRegistered == 1){
                  obj['regtxt'] = 'registered';
                }
                instance.carousel_array.push(obj);
              })
            }
            if(details[0].length == i){
              (()=>{
                setTimeout(()=>{
                  instance.waitForUpcoming = false;
                  if(instance.carousel_array.length==0){
                    instance.noUpcoming=true;
                  }
                  else{
                    instance.triggerforcarousel();
                  }
                },500);
              })();  
            }
          })
        })
      })
    })
  }
  triggerforcarousel(){
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
  }


  dismiss_notification(){
    this.notification=false;
  }

  dismiss_already_registered(){
    let meta = this;
    meta.alreadyRegistered = false;
  }

  show_notification(){
    let meta = this;
    meta.notification=false;
    if(meta.grab._privateKey =='' || meta.grab._privateKey==undefined){
      meta.notification=true;
      document.scrollingElement.scrollTop=0;
    }
  }

  dismiss_buybidpacknotify(){
    let meta = this;
    meta.buybidpacknotify = false;
  }

  dismiss_uradminnotify(){
    let meta = this;
    meta.uradminnotify=false;
  }

  close_regreqsuccessnotify(){
    let meta = this;
    meta.regreqsuccessnotify = false;
  }

  close_regreqfailnotify(){
    let meta = this;
    meta.regreqfailnotify =false;
  }

  preregisteration(auctionid,registeramount){
    let meta = this;
    meta.alreadyRegistered = false;
    meta.buybidpacknotify = false;
    meta.uradminnotify = false;
    meta.regreqsuccessnotify = false;
    meta.regreqfailnotify =false;

    if(meta.grab._privateKey =='' || meta.grab._privateKey == undefined){
      document.scrollingElement.scrollTop=0;
      meta.notification=true;
    }
    else{
      //preregister
      meta.grab.owner().then(owner => {
        if(!(owner == meta.grab._etherumAccountAddress)){
            meta.grab.ispreregistered(auctionid).then(_isPreRegistered => {
              if(_isPreRegistered == 1){
                //already registered
                meta.alreadyRegistered = true;
              }
              else{
                //preRegisteration
                meta.grab.balanceOf().then(grabitBalance => {
                  if(Number(grabitBalance)>=Number(registeramount)){
                    //canregister
                    meta.app.spinner.show();
                    meta.grab.preregister(auctionid).then(res => {
                      meta.app.spinner.hide();
                      if(res == 0){
                        //tx failed
                        meta.regreqfailnotify =true;
                      }
                      else if(res == 1){
                        //success
                        meta.show_auctions();
                        meta.regreqsuccessnotify = true;
                      }
                      else{
                        //tx failed
                        meta.regreqfailnotify =true;
                      }
                    });
                  }
                  else{
                    meta.buybidpacknotify = true;
                  }
                });
              }
            });
        }
        else{
          //You are admin
          meta.uradminnotify=true;
        }
      });
      
    }
  }

  ngOnInit() {
    var d = new Date();
    simplyCountdown('simply-countdown-custom-2', {
      year: d.getFullYear(),
      month: d.getMonth()+2,
      day: -24
    });
  }
}
