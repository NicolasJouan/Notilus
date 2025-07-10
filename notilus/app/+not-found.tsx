import { Text, View, StyleSheet} from 'react-native'
import { Link, Stack} from 'expo-router'

export default function NotFoundScreen(){
    return (
        <>
       <Stack.Screen options={{title:'oops not found'}}/>
        <View style={styles.container}>
            <Text>You Shouldn&apos;t be here</Text>
            <Link href={'/'} style={styles.button}>Go back to Home</Link> 
        </View> 
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
}) 