import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from "./routes";

import { AppComponent } from './app.component';
import { BidlogComponent } from './bidlog/bidlog.component';
import { ChangeownerComponent } from './changeowner/changeowner.component';
import { ClosedauctionComponent } from './closedauction/closedauction.component';
import { UpcomingauctionComponent } from './upcomingauction/upcomingauction.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { LiveauctionComponent } from './liveauction/liveauction.component';
import { LoginComponent } from './login/login.component';
import { MeetwinnersComponent } from './meetwinners/meetwinners.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OwnerComponent } from './owner/owner.component';
import { SelectComponent } from './select/select.component';
import { SendcreditsComponent } from './sendcredits/sendcredits.component';
import { SetresultComponent } from './setresult/setresult.component';
import { UserComponent } from './user/user.component';
import { ViewauctionComponent } from './viewauction/viewauction.component';
import { WinhistoryComponent } from './winhistory/winhistory.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CloneauctionComponent } from './cloneauction/cloneauction.component';
import { PreregisterComponent } from './preregister/preregister.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    BidlogComponent,
    ChangeownerComponent,
    ClosedauctionComponent,
    UpcomingauctionComponent,
    CreateAuctionComponent,
    LiveauctionComponent,
    LoginComponent,
    MeetwinnersComponent,
    MyaccountComponent,
    OwnerComponent,
    SelectComponent,
    SendcreditsComponent,
    SetresultComponent,
    UserComponent,
    ViewauctionComponent,
    WinhistoryComponent,
    CloneauctionComponent,
    PreregisterComponent,
    RegistrationdetailsComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
