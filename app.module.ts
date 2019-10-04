import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ElecComponent } from './elec/elec.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { PopComponent } from './pop/pop.component';
import {MatInputModule} from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
  
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';  
import {MatDividerModule} from '@angular/material/divider'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OfficeComponent } from './office/office.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ElecComponent,
    LoginComponent,
    PopComponent,
    CartComponent,
    OfficeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCarouselModule,
    Ng2CarouselamosModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    MatTabsModule
  ],
  exports:[
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCarouselModule,
    Ng2CarouselamosModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
