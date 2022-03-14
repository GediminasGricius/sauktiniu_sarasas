import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes:Routes=[
  { path:'', component:ListComponent },
  { path:'new', component:NewComponent},
  { path:'update/:id', component:UpdateComponent},
  { path:'login', component:LoginComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    UpdateComponent,
    NavigationComponent,
    ListItemComponent,
    LoginComponent
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
