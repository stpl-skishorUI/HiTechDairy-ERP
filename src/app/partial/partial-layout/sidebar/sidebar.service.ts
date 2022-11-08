import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Asset Management',
      type: 'header'
    },
    {
      title: 'Asset Dashboard',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      url:'./asset-dashboard'
    },
    {
      title: 'Item Master',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Group Master',
          url:'group-master'
        },
        {
          title: 'Category Master',
          url:'category-master'
        },
        {
          title: 'Parameter Master',
          url:'parameter-master'
        }
      ]
    },
    {
      title: 'Store & Vendor Master',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Store Master',
          url:'store-master'
        },
        {
          title: 'Vendor Master',
          url:'vendor-master'
        }
      ]
    },
    {
      title: 'Manage Items',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Item Registration',
          url:'item-registration'
        },
        {
          title: 'Item Issue/Return',
          url:'item-issue-return'
        },
        {
          title: 'Item Transfer',
          url:'item-transfer'
        },
        {
          title: 'Item Repair Issue/Return',
          url:'item-repair-issue-return'
        },
        {
          title: 'Item Scrap/Donated',
          url:'item-scrap-donated'
        }
      ]
    },
    {
      title: 'HRMS',
      type: 'header'
    },
    {
      title: 'HRMS Dashboard',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      url:'./hrms-dashboard'
    },
    {
      title: 'Masters',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Organization Register',
          url:'organization-register'
        },
        {
          title: 'Company Register',
          url:'company-register'
        },
        {
          title: 'Branch Registration',
          url:'branch-registration'
        },
        {
          title: 'Department Registration',
          url:'department-registration'
        },
        {
          title: 'Designation Register',
          url:'designation-register'
        },
        {
          title: 'Bank Register',
          url:'bank-register'
        }
      ]
    },
    {
      title: 'AMCU',
      type: 'header'
    },
    {
      title: 'AMCU Dashboard',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      url:'./amcu-dashboard'
    },
    {
      title: 'Masters',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Route Registration',
          url:'route-registration'
        },
        {
          title: 'Village Registration',
          url:'village-registration'
        },
        {
          title: 'Company Account Registration',
          url:'company-account-registration'
        },
        {
          title: 'Customer Registration',
          url:'customer-registration'
        },
        {
          title: 'Material Registration',
          url:'material-registration'
        },
        {
          title: 'employee Registration',
          url:'employee-registration'
        }       
      ]
    },


    // {
    //   title: 'Charts',
    //   icon: 'fa fa-chart-line',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Pie chart',
    //     },
    //     {
    //       title: 'Line chart'
    //     },
    //     {
    //       title: 'Bar chart'
    //     },
    //     {
    //       title: 'Histogram'
    //     }
    //   ]
    // },
    // {
    //   title: 'Maps',
    //   icon: 'fa fa-globe',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Google maps',
    //     },
    //     {
    //       title: 'Open street map'
    //     }
    //   ]
    // },
    // {
    //   title: 'Extra',
    //   type: 'header'
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary'
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple'
    // },
    // {
    //   title: 'Examples',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple'
    // }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
