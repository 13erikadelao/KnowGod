import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Main from '../../../src/components/Login/MainContainer/MainContainer';
import SecondContainer from '../../../src/components/Login/SecondContainer/SecondContainer';
import ThirdContainer from '../../../src/components/Login/ThirdContainer/ThirdContainer';
import styles from './styles';

//locale
import en from '../../../locale/en';

export default function Login(props) {
  return (
    <Main>
      <Image style={styles.img} source={require('../../../src/assets/login/Full_Color_Logo.png')} />
      <SecondContainer>
      </SecondContainer>
      <ThirdContainer>
      </ThirdContainer>
    </Main>
  );
}