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
  const [isTask, setIsTask] = useState(false);

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

  const viewTask = elem => {
    setIsTask(true);
    setTask(elem);
  };

  const deleteTask = id => {
    setList(list.filter((elem, ind) => id != ind));
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center', paddingTop: 35}}>
        {isTask ? 'Task Details' : !toggle ? 'Add Task' : 'Edit Task'}
      </Text>
      {!isTask ? (
        <>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder="Task"
          />
          <View style={styles.button}>
            <Button
              onPress={addMore}
              title={!toggle ? 'Add Task' : 'Edit Task'}
              color="#841584"
            />
          </View>
          <View>
            <Text
              style={{fontSize: 30, textAlign: 'center', paddingVertical: 10}}>
              Task List
            </Text>
            {list.map((elem, ind) => (
              <>
                <TouchableOpacity
                  key={ind}
                  style={{fontSize: 20, padding: 10}}
                  onPress={() => viewTask(elem)}>
                  <Text>{elem}</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                  <Button
                    onPress={() => editTask(elem, ind)}
                    title="Edit"
                    color="grey"
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    onPress={() => deleteTask(ind)}
                    title="Delete"
                    color="red"
                  />
                </View>
              </>
            ))}
          </View>
        </>
      ) : (
        <View>
          <Text style={{paddingVertical: 20, paddingHorizontal: 10}}>
            {task}
          </Text>
          <View style={styles.button}>
            <Button
              onPress={() => {
                setIsTask(false), setTask('');
              }}
              title="Back"
              color="violet"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 900,
    backgroundColor: 'pink',
  },
  input: {
    marginHorizontal: 10,
    border: 'none',
    borderRadius: 10,
    marginTop: 40,
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingVertical: 1,
    paddingHorizontal: 13,
  },
  button: {
    margin: 10,
  },
});

export default App;
