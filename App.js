import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <TextInput></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
