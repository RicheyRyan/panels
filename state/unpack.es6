function unpackApps(apps) {
  let newApps = {};
  Object.keys(apps).forEach(app => newApps[app] = unpackApp(app, apps[app]));
  return newApps;
}

function unpackApp(app, theApp) {
  const dep = require(app);

  return {
    ...theApp,
    store: dep.configureStore(theApp.store)
  };
}

export default function unpack(state) {
  return {
    apps: {
      byDomain: unpackApps(state.apps.byDomain),
      toLoad: state.apps.toLoad
    },
    panels: state.panels,
    router: state.router
  };
}