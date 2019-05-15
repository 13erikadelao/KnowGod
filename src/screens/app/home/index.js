import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//custom
import styles from './styles';

//locale
import en from '../../../locale/en';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>
        {en.home_screen_title}
      </Text>
      <TouchableOpacity
        onPress={props.onDestroySession}
      >
        <Text>
          {en.logout_button_text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}