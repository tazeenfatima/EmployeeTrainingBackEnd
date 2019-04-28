import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { NavigationComponent } from './components/navigation/navigation.component'

// Routes
import { appRoutes } from './routes';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignUpComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    NgDatepickerModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
