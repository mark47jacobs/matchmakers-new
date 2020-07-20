import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import {LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import { AboutUsComponent } from "./pages/examples/about-us/about-us.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
