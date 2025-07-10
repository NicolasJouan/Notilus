import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>About</Link>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'blue',
    alignItems : 'center',
    justifyContent : 'center',
  },
  text : {
    color : 'red',
  }

})