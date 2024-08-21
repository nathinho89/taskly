import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemContainerText}>Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
  itemContainer: {
    borderBottomColor: theme.colorCerulian,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemContainerText: {
    fontSize: 18,
    fontWeight: '200',
  },
});
