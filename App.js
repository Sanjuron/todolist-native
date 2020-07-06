import React, { Component} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default class App extends Component{
state = {
  todos : [
   {id:1, post:"Regarder un film"},
   {id:2, post:"Réviser Native"},
  ],
  task : "",
}

addTodo = (todo) => {
  let todos= [...this.state.todos, todo];
  this.setState({
    todos : todos
  })
  console.log(this.state.todos)
}

addTask = (task) => {
  this.setState({
    task : task
  })
  console.log(this.state.task)
}

deleteTodo = (id) => {
  let todos = this.state.todos.filter(todo => {
    return todo.id !== id
  }); //filter est une méthode non destructrice, elle n'altère pas le state
  this.setState({
    todos: todos 
  })
}


render () {
  return (
    <View style={styles.container}>
      <Text>Add a new Todo!</Text>
      <MaterialCommunityIcons name="delete" size={24} color="black" />
      <TextInput style={styles.input} value={this.state.task} onChangeText={text => this.addTask(text)} />
      <Button title="valider" onPress={this.addTodo} />

      <FlatList
        data={this.state.todos}
        renderItem={({item}) => <Text style={styles.list}>{item.post}</Text> }        
        keyExtractor={item => item.id.toString()}
      />
    
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33D1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 5,
  },
  list:{
    borderWidth: 2,
    borderColor: "blue",
    padding: 15,
    margin: 5,
    width: 300,
  }
});
