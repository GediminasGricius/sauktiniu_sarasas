import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';

const appRoutes:Routes=[
  { path:'', component:ListComponent },
  { path:'new', component:NewComponent},
  { path:'update/:id', component:UpdateComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
