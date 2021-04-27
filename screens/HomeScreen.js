import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to details screen" onPress={() => navigation.navigate("Details")}/>
      </View>
    );
}

export default HomeScreen;