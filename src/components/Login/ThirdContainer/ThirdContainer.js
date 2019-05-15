import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles'
const Third = (props) => {
    return (
        <View style={styles.thirdContainer}>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text} onPress={props.onPressLogin}>{"LOGIN"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.registerButton}>
                <TouchableOpacity>
                    <Text style={styles.text}>{"CREATE ACCOUNT"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Third;