import { useRouter } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CounterScreen() {
  const router = useRouter();

  return (
    <View style={styles.counter}>
      <TouchableOpacity
        style={styles.counterBtn}
        onPress={() => router.navigate('idea')}
      >
        <Text style={styles.counterText}>Go to /idea</Text>
      </TouchableOpacity>
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
  counterBtn: {
    fontSize: 24,
    padding: 8,
    textAlign: 'center',
  },
});
