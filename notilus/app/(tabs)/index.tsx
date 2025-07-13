import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";
import * as SQLite from 'expo-sqlite'


export default function Index() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('') 

  //import from the database the note saved on opening the page
  
  const createNote = async () => {
    const db = await SQLite.openDatabaseAsync('noteDB');
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    updatedAt TEXT
    );
    INSERT INTO notes (title, content, updatedAt) VALUES ('Title 1', 'Hi venomous how are you', '12:00')
    `)
    const result = await db.getFirstAsync('SELECT * FROM notes') 
    console.log(result)
    setText(String(result.content))
    setTitle(String(result.title))
  };

  useEffect(() => {
    createNote()
    // setText(result.content);
  }, [])
  



  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>This is the Notes page</Text>
      <View>
        <Link href={"/(tabs)/to-do"}>To Do</Link>
      </View>
      <TextInput value={title} onChangeText={setTitle} placeholder="Title here..."></TextInput>
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