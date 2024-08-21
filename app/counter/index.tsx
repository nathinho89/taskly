import { Text, View, StyleSheet } from 'react-native';

export default function CounterScreen() {
  return (
    <View style={styles.counter}>
      <Text style={styles.counterText}>Idea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counterText: {
    fontSize: 24,
  },
});
