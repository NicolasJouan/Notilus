import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return  <Tabs screenOptions={{
    tabBarActiveTintColor:'purple',
    tabBarInactiveTintColor:'grey'
  }}>
  <Tabs.Screen name="index" options={{ title: 'Notes', tabBarIcon: ({focused, color }) => <Ionicons name={focused? 'documents': 'documents-outline'} color = {color} size={26}/>, }}  />
  <Tabs.Screen name="to-do" options={{ title: 'To Do List', tabBarIcon: ({focused, color}) => <Ionicons name={focused? 'checkmark-done-circle' : 'checkmark-done-circle-outline'} color={color} size={26}/>,  }} />
</Tabs>;
}

