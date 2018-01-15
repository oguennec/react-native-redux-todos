import React from 'react';
import * as PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, TextInput, View } from 'react-native';

const TodoInput = ({ onChangeText, onPress }) => {

  const { button, buttonText,textInput } = styles;

    return (
      <View style={styles.container}>
        <TextInput style={textInput} onChangeText={onChangeText} placeholder=" enter a todo" />
        <TouchableHighlight style={button} onPress={onPress}>
          <Text style={buttonText}>
            Add Todo
          </Text>
        </TouchableHighlight>
      </View>
    );
};

TodoInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: 40,
    justifyContent: 'center'
  },
  textInput: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 0,
    color: '#48BBEC',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  }
});

export default TodoInput;
