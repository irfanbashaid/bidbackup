import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { TermsComponent } from './terms/terms.component';
import { SignupComponent } from './signup/signup.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { ChangeownerComponent } from './changeowner/changeowner.component';
import { SendcreditsComponent } from './sendcredits/sendcredits.component';
import { SetresultComponent } from './setresult/setresult.component';
import { MydealsComponent } from './mydeals/mydeals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    SignupComponent,
    HowitworksComponent,
    TermsComponent,
    SignupComponent,
    CreateAuctionComponent,
    ChangeownerComponent,
    SendcreditsComponent,
    SetresultComponent,
    MydealsComponent
  ],
  imports: [
    BrowserModule,
    Ng4LoadingSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
