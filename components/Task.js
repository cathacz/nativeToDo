import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <TouchableOpacity style={style.square}></TouchableOpacity>
        <Text style={style.itemText}>{props.text}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    borderColor: "rgba(109, 153, 130, 0.5)",
    borderStyle: "solid",
    borderWidth: 2,

    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: "rgba(109, 153, 130, 0.25)",
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginRight: 15,
  },
  itemText: {
    maxHeight: "80%",
  },
  circular: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderColor: "rgba(109, 153, 130, 0.75)",
    borderStyle: "solid",
    borderWidth: 2,
  },
});

export default Task;
