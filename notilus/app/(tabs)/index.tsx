import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";
import * as SQLite from 'expo-sqlite'


export default function Index() {
  const [text, setText] = useState('')
  
  //import from the database the note saved on opening the page
  useEffect(() => { setText('Hi serpentus')}, [])



  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>This is the Notes page</Text>
      <View>
        <Link href={"/(tabs)/to-do"}>To Do</Link>
      </View>
      <TextInput value={text} onChangeText={setText} placeholder="Write here..."></TextInput>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    alignItems : 'center',
    justifyContent : 'center',
  },
  text : {
    color : 'purple',
  }

})