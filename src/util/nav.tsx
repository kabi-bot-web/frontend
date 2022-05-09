import React from 'react';
import { LeftNavigationGroup } from '../data/nav';
import SendIcon from '@mui/icons-material/Send';

export const navList: Array<LeftNavigationGroup> = [
  {
    groupName: '1', items: [
      { name: '123', path: '/', icon: <SendIcon /> },
      { name: '123', path: '/1', icon: <SendIcon /> }
    ]
  },
  {
    groupName: '2', items: [
      { name: '123', path: '/2', icon: <SendIcon /> },
      { name: '123', path: '/3', icon: <SendIcon /> }
    ]
  },
  { groupName: '3', items: [] }
];
