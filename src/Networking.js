import { Platform } from 'react-native';

let Networking;

if (Platform.OS === 'ios') {
  Networking = require('react-native/Libraries/Network/RCTNetworking.ios').default;
} else if (Platform.OS === 'android') {
  Networking = require('react-native/Libraries/Network/RCTNetworking.android').default;
}

export default Networking;