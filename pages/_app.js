import React from 'react'
import { wrapper } from '../redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default wrapper.withRedux(MyApp)
