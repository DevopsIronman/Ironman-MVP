import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/product',
      icon: 'home'
    },
    {
      title: 'Products',
      icon: 'cube',
      children: [
        {
          title: 'Breakers',
          url: '/product',
        },
        {
          title: 'Breakers Purchased',
          url: '/product-purchased',
        },
      ]
    },
    {
      title: 'Lead Management',
      icon: 'person-add',
      children: [
        {
          title: 'Create Lead',
          url: '/new-lead',
        },
        {
          title: 'Leads',
          url: '/existing-lead',
        },
      ]
    },
    {
      title: 'Customers',
      icon: 'people',
      children: [
        {
          title: 'Customers List',
          url: '/existing-customers',
        },
        {
          title: 'Customer Enquiry',
          url: '/customer-enquiry',
        },
      ]
    },
    {
      title: 'All Orders',
      url: '/orders',
      icon: 'cart'
    },
    {
      title: 'All service',
     icon: 'construct',
     children: [
      {
        title: 'Service History',
        url: '/service-history',
      },
      {
        title: 'Due for Service',
        url: '/service-due',
      },
    ]
    },
    {
      title: 'Abous Us',
      url: '/about-us',
      icon: 'information-circle'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      icon: 'warning'
    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('menu/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
}
