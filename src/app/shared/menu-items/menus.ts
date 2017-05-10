
export const MENUITEMS = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'apps',
    name: 'APPS',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'calendar', name: 'CALENDAR'},
      {state: 'messages', name: 'MESSAGES'}
    ]
  },
  {
    state: 'material',
    name: 'MATERIAL',
    type: 'sub',
    icon: 'equalizer',
    badge: [
      {type: 'purple', value: '10'}
    ],
    children: [
      {state: 'dialog', name: 'DIALOG'}
    ]
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'pages',
    children: [
      {state: 'blank', name: 'BLANK'},
    ]
  },
  {
    state: 'session',
    name: 'SESSION',
    type: 'sub',
    icon: 'face',
    children: [
      {state: '404', name: '404'},
      {state: 'error', name: 'ERROR'},
      {state: 'signin', name: 'SIGNIN'},
      {state: 'signup', name: 'SIGNUP'},
      {state: 'forgot', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'},
    ]
  }
];
