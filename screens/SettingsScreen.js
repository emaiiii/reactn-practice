import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button title="Go to details screen"/>
      </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});