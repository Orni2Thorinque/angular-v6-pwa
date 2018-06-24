export const HOME = 'home';
export const DASHBOARD = 'dashboard';
export const CAMERA = 'camera';
export const PICTURE = 'picture';
export const LOCATION = 'location';

export const DRAWER_DATA = [
  {
    device: 'Aperçu',
    content: [
      {
        label: 'Contenu',
        icon: 'ballot',
        active: true
      },
    ]
  },
  {
    device: 'Navigateur',
    content: [
      {
        label: 'Camera',
        icon: 'videocam',
        active: true

      }, {
        label: 'Micro',
        icon: 'mic',
        active: false
      }, {
        label: 'Stockage',
        icon: 'storage',
        active: false
      }, {
        label: 'Notifications',
        icon: 'notifications',
        active: false
      }, {
        label: 'Localisation',
        icon: 'place',
        active: true
      }]
  }, {
    device: 'Mobile',
    content: [
      {
        label: 'Call',
        icon: 'call',
        active: false
      }, {
        label: 'Picture',
        icon: 'camera',
        active: true
      }, {
        label: 'Battery',
        icon: 'battery_full',
        active: false
      }, {
        label: 'Contacts',
        icon: 'contacts',
        active: false
      }, {
        label: 'Cell Network',
        icon: 'network_cell',
        active: false
      }, {
        label: 'Wifi Network',
        icon: 'network_wifi',
        active: false
      }, {
        label: 'GPS',
        icon: 'gps_fixed',
        active: false
      }
    ]
  }
];