import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet, TextInput } from 'react-native';

export default function Market_place() {
  return (
    <View style={styles.container}>
      <Text>M screen!</Text>
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