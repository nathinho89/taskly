import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';

type ShoppingListItemProps = {
  name: string;
};

export function ShoppingListItem({ name }: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'It will be gone for good',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Ok, deleting'),
          style: 'destructive',
        },
        { text: 'Cancel', style: 'cancel' },
      ],
    );
  };

  return (
    <View style={styles.shoppingItem}>
      <Text style={styles.shoppingItemText}>{name}</Text>
      <TouchableOpacity
        style={styles.shoppingItemBtn}
        onPress={handleDelete}
        activeOpacity={0.8}
      >
        <Text style={styles.shoppingItemBtnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shoppingItem: {
    borderBottomColor: theme.colorCerulian,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shoppingItemText: {
    fontSize: 18,
    fontWeight: '200',
  },
  shoppingItemBtn: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  shoppingItemBtnText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
