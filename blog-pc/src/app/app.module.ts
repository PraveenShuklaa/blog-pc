import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Route } from '@angular/compiler/src/core';

const routes:Routes=[
  { path:'', component:HomeComponent},
  {path:'blogs', component:BlogsComponent},
  {path:'about', component:AboutComponent},
  {path:'contact',component:ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
