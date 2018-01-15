import React from 'react';
import * as PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Link = ({ active, color, iconName, underlayColor, reverseColor, onClick }) => {

  return (
    <View style={styles.container}>
      <Icon 
        reverse
        raised
        color={color}
        underlayColor={underlayColor}
        type="ionicon"
        name={iconName}
        reverseColor={reverseColor}
        onPress={(e) => {
          e.preventDefault();
          onClick();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
    padding: 10,
  }
});

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  underlayColor: PropTypes.string.isRequired,
  reverseColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
