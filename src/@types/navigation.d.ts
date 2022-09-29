export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: {};
      Home: {};
      About?: {
        author?: string;
        version?: string;
      };
      Settings: {};
    }
  }
}
