import { registerApplication, start } from "single-spa";
import * as isActive from './activity-function'


registerApplication({
  name: "DTP router example",
  app: () =>
    System.import(
      "@DTP/example"
    ),
  activeWhen: isActive.example,
});

start({
  urlRerouteOnly: true,
});
