import React from 'react-dom/client'

import '~/App.css'
import App from '~/App'

React
  .createRoot(document.querySelector('layout-container')!)
  .render(App())
