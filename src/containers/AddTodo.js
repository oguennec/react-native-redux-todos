import React from 'react';
import { Form, TouchableHighlight, Input, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let textInput;

  let onChange = (e) => {
    textInput = e;
  };

  let onPress = () => {
    dispatch(addTodo(textInput));
    //textInput = '';
  };

//<TextInput style={styles.textInput} onChangeText={onChange} ref={input => textInput = input} placeholder=" enter a todo" />

  return (
    <View>
      <TextInput style={styles.textInput} onChangeText={onChange} placeholder=" enter a todo" />
      <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
          Add Todo
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  }
});


    //  <TouchableHighlight onPress={onPress}>
    //      <Text>
    //      Add Tod
    //    </Text>
    //  </TouchableHighlight>

    // <View>
    //   <Form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       if (!input.value.trim()) {
    //         return;
    //       }
    //       dispatch(addTodo(input.value));
    //       input.value = '';
    //     }}
    //   >
    //     <Input
    //       ref={(node) => {
    //         input = node;
    //       }}
    //     />
    //     <Button type="submit">
    //       Add Todo
    //     </Button>
    //   </Form>
    // </View>

AddTodo = connect()(AddTodo);

export default AddTodo;
