import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Todos from redux examples</Text>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center',
  }
});

export default App;
