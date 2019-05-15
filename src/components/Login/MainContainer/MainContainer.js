import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
const Main = (props) => {
    return (
      <View style={styles.container}>
        {props.children}
      </View>
    )
  }
export default Main;
