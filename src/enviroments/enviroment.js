const appSettings = {
  Info: {
    Name: "wolox",
    Version: "1.0.0",
  },
  Config: {
    Environment: "Dev",
  },
  Environments: {
    Dev: {
      Url: {
        android: "http://10.0.2.2:3000",
        ios: "http://localhost:3000"
      },
    },
    Prod: {
      Url: {
        android: "http://10.0.2.2:3000",
        ios: "http://localhost:3000"
      },
    },
  }
}

export const enviroment = {
  URL: appSettings.Environments[appSettings.Config.Environment].Url,
  TYPE: appSettings.Config.Environment,
  VERSION: appSettings.Info.Version
};