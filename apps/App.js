import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.addition}>
      My name is <Text style={{fontWeight:"bold"}}> Angela Acquah</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  addition:{
    fontsize:24,
    
  }
});
