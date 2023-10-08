import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Hi, this is home screen</Text>
      <Button
        title="Go to the Details page"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
