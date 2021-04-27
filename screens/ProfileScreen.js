import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button title="Go to details screen" onPress={() => navigation.navigate("Details")}/>
      </View>
    );
}

export default ProfileScreen;