import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'lancers',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "capacitor-cordova-android-plugins": {}
    }};

export default config;
