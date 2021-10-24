import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
// import { useFonts } from 'expo-font';
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Heutige Aufgaben</Text>
        <ScrollView style={styles.items}>
          {/* Task come here */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            );
          })}

          <View style={styles.buttonWrapper}>
            <Button
              color="rgba(109, 153, 130, 1)"
              style={styles.button}
              onPress={() => {
                alert("You little piggy, you touched me...");
              }}
              title="Dare to touch me?"
            />
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Füge was hinzu"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    height: "100%",
  },
  sectionTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    backgroundColor: "#fff",
    borderTopColor: "rgba(109, 153, 130, 0.25)",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    borderBottomColor: "#fff",

    position: "absolute",
    bottom: 20,
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "75%",
    borderColor: "rgba(109, 153, 130, 0.5)",
    borderStyle: "solid",
    borderWidth: 2,
  },
  addWrapper: {
    margin: 10,
    width: 60,
    height: 60,
    backgroundColor: "rgba(109, 153, 130, 0.5)",
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 40,
  },
  buttonWrapper: {
    backgroundColor: "rgba(109, 153, 130, 0.5)",
  },
  button: {
    fontSize: 50,
  },
});
