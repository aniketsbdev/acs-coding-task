import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatCardModule } from "@angular/material/card";
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MatCardModule,MatBadgeModule],
  declarations: [
    AppComponent,
    HelloComponent,
    IntroductionComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
