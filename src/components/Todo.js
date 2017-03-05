import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const Todo = ({ onClick, completed, text }) => (
  <ListItem titleStyle={styles.title} subtitleStyle={styles.subtitle}
    onPress={onClick}
    onLongPress={onClick}
    title={text}
    subtitle={completed ? 'completed' : 'not completed'}
    leftIcon={{name: completed ? 'check' : 'alarm-on', color: completed ? 'green' : 'red'}}
    hideChevron
   >
  </ListItem>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
    subtitle: {
    fontSize: 10,
    textAlign: 'center',
  }
});

export default Todo;
