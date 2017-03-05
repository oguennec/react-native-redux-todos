import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <View style={styles.container}>
    <FilterLink filter="SHOW_ALL" iconName='md-eye' color='#48BBEC' underlayColor='#48BBEC' reverseColor='white' />
    <FilterLink filter="SHOW_ACTIVE" iconName='md-alarm' color='lightpink' underlayColor='pink' reverseColor='red' />
    <FilterLink filter="SHOW_COMPLETED" iconName='md-checkmark' color='lightgreen' underlayColor='green' reverseColor='darkgreen' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
    padding: 10,
  },
  containerButton: {
    flex: 3,
  }
});

export default Footer;
