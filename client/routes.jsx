import React from 'react';
import {mount} from 'react-mounter';
import ReactDom from 'react-dom';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';

FlowRouter.route('/', {
  name: "home",
  action(){
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    })
  }
});
