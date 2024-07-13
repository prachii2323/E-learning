import React from 'react';
import { WebView } from 'react-native-webview';

const WebpageViewer = () => {
  const url = 'https://meet.google.com/veg-qveo-cbm'; // Replace with your webpage URL

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
};

export default WebpageViewer;