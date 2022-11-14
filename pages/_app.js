import {Router} from "next/router";
import NProgress from 'nprogress'

import 'bootstrap/dist/css/bootstrap.css'
import 'nprogress/nprogress.css';
import '../styles/globals.scss'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: true })

import {Web3ReactProvider} from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider) => {
    return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  return (
      <Web3ReactProvider getLibrary={getLibrary}>
          <Component {...pageProps} />
      </Web3ReactProvider>
  )
}

export default MyApp
