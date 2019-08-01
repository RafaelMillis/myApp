import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemsComponent,
      ItemDetailsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule, //for get http
      RouterModule.forRoot([
         { path: '', component: ItemsComponent },
         { path: 'itemdetails/:itemId', component: ItemDetailsComponent}
       ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
