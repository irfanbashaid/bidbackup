import { Component } from '@angular/core';
import { GrabitService } from './service/grabit.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grraabit';
  error_message:string='Fill all the details correctly.';
  notification:boolean;
  user:boolean=true;
  isLoggedIn:boolean = false;
  _web3:any;
  spinner:any;
  public loginnotification:boolean=false;
  constructor(private grab:GrabitService,private route:Router,private spinning:Ng4LoadingSpinnerService) { 
    // this.spinner = this.spin;
    this.spinner = this.spinning;
  }
  loginnotifyshower(){
    let meta = this;
    if(meta.grab._privateKey=='' || meta.grab._privateKey==undefined){
      meta.loginnotification = true;
    }
  }
  dismiss_login_notification(){
    let meta = this;
    meta.loginnotification = false;
  }
hideURLbar() {
  window.scrollTo(0, 1);
}

show_notification(){
  this.notification=true;
}
dismiss_notification(){
  this.notification=false;
}

login(){
  let email=(document.getElementById('email') as HTMLInputElement).value;
  let passwd=(document.getElementById('password') as HTMLInputElement).value;
  let prikey=(document.getElementById('privatekey') as HTMLInputElement).value;
  if(email.trim()!='' || passwd.trim()!='' ||  prikey.trim()!='')
  {
    let _detail:any={};
    _detail['email']=email;
    _detail['password']=passwd;
    _detail['publickey']=prikey;
    let access = this;
    access.grab.setPrivateKey(prikey).then(res=>{
      _detail['publickey']=access.grab._etherumAccountAddress;
      if(res==true){
        access.grab.login(_detail).subscribe(
          res => { 
            access.isLoggedIn= true;
            access.grab.setToken(res['token']);
            access.grab.owner().then(owneraddress=>{
              if(owneraddress==access.grab._etherumAccountAddress){
                access.close_toggle()
                access.user=false;
                access.route.navigate(['/createAuction']);
              }
              else{
                access.close_toggle();
                access.user=true;
                access.route.navigate(['/terms']);
              }
            }),
            (document.getElementById("email")as HTMLInputElement).value="";
            (document.getElementById("password")as HTMLInputElement).value="";
            (document.getElementById("privatekey")as HTMLInputElement).value="";
          },
          err => {   
            this.error_message='Invalid Credentials';
            this.show_notification();     
          }
        );
      }
      else if(res== false){
        this.error_message='User Not Found';
        this.show_notification();
      }
    }) 
    return false;
  }
  else{
    // this.validation_error=true;
    this.show_notification();
  }   
  }

  signout(){
    let instance = this;
    instance.grab.deleteToken();
    instance.grab._privateKey='';
    instance.grab._etherumAccountAddress='';
    instance.isLoggedIn= false;
    instance.user=true;
  }
close_toggle(){
  $(".button-log a").toggleClass('btn-open').toggleClass('btn-close');
  $(".overlay-login").fadeToggle(1);
    // this.open = false;
// });
}

loginlayoutopen(){
  // $(document).ready(function() {
    // $(".btn-open").click(function() {
        $(".overlay-login").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        return false; 
    // });
// });
}

scrollup(){
  document.documentElement.scrollTop = 0;
}

clear_fields(){
  let meta = this;
  (document.getElementById('email') as HTMLInputElement).value='';
  (document.getElementById('password') as HTMLInputElement).value='';
  (document.getElementById('privatekey') as HTMLInputElement).value='';
  meta.dismiss_login_notification();
  meta.scrollup();
}

ngOnInit() {  

  
  $('.overlay-close1').on('click', function() {
      $(".overlay-login").fadeToggle(200);
      $(".button-log a").toggleClass('btn-open').toggleClass('btn-close');
      this.open = false;
  });

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
      /*
                  var defaults = {
                      containerID: 'toTop', // fading element id
                    containerHoverID: 'toTopHover', // fading element hover id
                    scrollSpeed: 1200,
                    easingType: 'linear' 
                    };
                  */

      $().UItoTop({
          easingType: 'easeOutQuart'
      });

  });
}

}