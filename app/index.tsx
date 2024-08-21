import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppingListItem';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.home}>
      <Link style={styles.homeBtn} href="/counter">
        Go to /counter
      </Link>
      <ShoppingListItem name="Coffee" isCompleted />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" isCompleted />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
  homeBtn: {
    fontSize: 24,
    padding: 8,
    textAlign: 'center',
  }
});
