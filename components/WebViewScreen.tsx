import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

export const WebViewScreen = () => {
    const webUri = process.env.EXPO_PUBLIC_URL_WEB_PARCEL!;

    return (
        <SafeAreaView style={styles.container}>
            <WebView
                source={{ uri: webUri }}
                style={styles.webview}
            />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});
