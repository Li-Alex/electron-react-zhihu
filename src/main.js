import React from 'react'
import ReactDom from 'react-dom'
import {App} from './views/app'

require('./assets/fonts/iconfont.scss')
require('./css/main.scss')

import RouterConfig from './router'
ReactDom.render((
	RouterConfig
),document.getElementById('app'))