import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Styles'
const Second = (props) => {
    return (
    <View style={styles.secondContainer}>
        <View>
          <Text style={styles.containersText}>
            {"email"}
          </Text>
          <View style={styles.viewInput}>
            <TextInput style={styles.containersText}>
            </TextInput>
          </View>
        </View>
        <View style={styles.secondContainerOfSecondContainer}>
          <Text style={styles.containersText}>
            {"password"}
          </Text>
          <View style={styles.viewInput}>
            <TextInput style={styles.containersText}>
            </TextInput>
          </View>
        </View>
    </View>
    )
  }
export default Second;