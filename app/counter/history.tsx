import { Text, View, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.history}>
      <Text style={styles.historyText}>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyText: {
    fontSize: 24,
  },
});
