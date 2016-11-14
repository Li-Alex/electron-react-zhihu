import React from 'react'
import ReactDom from 'react-dom'
import {App} from './views/app'
import $ from 'jquery'

require('./assets/fonts/iconfont.scss')
require('./css/main.scss')

window.$ = $

import RouterConfig from './router'
ReactDom.render((
	RouterConfig
),document.getElementById('app'))