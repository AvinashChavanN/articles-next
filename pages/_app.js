import React from "react";
import App, { Container } from "next/app";
import "../styles/index.css";
import NextNProgress from "../components/common/NextNProgress";
import { Provider } from "mobx-react";

import initializeStore from "../store/stores";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
          <NextNProgress />
          <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
