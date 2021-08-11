import { Component, OnInit } from '@angular/core';

import { CredentialsService } from '../credentials.service';

import { OpenOverlayService } from '../open-overlay.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: any;

  userName: any;

  openClose = false;

  openNavBarPersonalDisplay = false;

  constructor(public credentials: CredentialsService, public openOverlay: OpenOverlayService, public router: Router) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
  }

  openMenu() {
    this.openClose = true;
  }

  closeMenu() {
    console.log("testClose");
    this.openClose = false;
  }

  openSettings() {
    this.openOverlay.changeOverlayDisplay();
    this.openNavBarPersonalDisplay = false;
  };

  openNavBarPersonal() {
    this.openNavBarPersonalDisplay =! this.openNavBarPersonalDisplay;
  };

  signOut() {
    sessionStorage.clear();
    this.router.navigate([""]);
    this.openNavBarPersonalDisplay = false;
  }




}
