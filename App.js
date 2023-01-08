import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  const [id, setId] = useState('');
  const [toggle, setToggle] = useState(false);

  // const screenDimension=Dimensions.getW

  const addMore = () => {
    if (!toggle) {
      setList([...list, task]);
      setTask('');
    } else {
      let updatedList = list.map((elem, ind) => (ind === id ? task : elem));
      setList(updatedList);
      setTask('');
      setToggle(false);
    }
  };

  const editTask = (elem, ind) => {
    setToggle(true);
    setId(ind);
    setTask(elem);
  };

  const deleteTask = id => {
    setList(list.filter((elem, ind) => id != ind));
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center', paddingTop: 35}}>
        {!toggle ? 'Add Notes' : 'Edit Note'}
      </Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder=" Task "
      />
      <View style={styles.button}>
        <Button
          onPress={addMore}
          title={!toggle ? 'Add Task' : 'Edit Task'}
          color="#841584"
        />
      </View>
      <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Notes List</Text>
        {list.map((elem, ind) => (
          <>
            <Text key={ind} style={{fontSize: 20, padding: 10}}>
              {elem}
            </Text>

            <View style={styles.button}>
              <Button
                onPress={() => deleteTask(ind)}
                title="Delete Task"
                color="red"
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => editTask(elem, ind)}
                title="Edit Task"
                color="grey"
              />
            </View>
          </>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 900,
    backgroundColor: 'pink',
  },
  input: {
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 13,
    // textAlign: 'center',
  },
  button: {
    margin: 10,
  },
});

export default App;
