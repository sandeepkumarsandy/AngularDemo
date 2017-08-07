import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EditService } from './void-management/actions';
import { VoidManagementComponent } from './void-management/void-management.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


const appRoute:Routes = [{
        path:'voidManagement',
        component:VoidManagementComponent
    },
    {
        path:'login',
        component:LoginComponent
    }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VoidManagementComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonGroupModule,
    DateInputsModule,
    RouterModule.forRoot(appRoute)
    ],
    
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
