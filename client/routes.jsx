import React from 'react';
import {mount} from 'react-mounter';
import ReactDom from 'react-dom';

import App from '../App.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';

FlowRouter.route('/', {
  name: "home",
  action(){
    mount(MainLayout, {
      content: (<App />)
    })
  }
});
