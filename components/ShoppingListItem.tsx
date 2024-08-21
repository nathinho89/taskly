import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../theme';

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: ShoppingListItemProps) {
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
    <View
      style={[
        styles.shoppingItem,
        isCompleted ? styles.shoppingItemCompleted : undefined,
      ]}
    >
      <Text
        style={[
          styles.shoppingItemText,
          isCompleted ? styles.shoppingItemTextCompleted : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.shoppingItemBtn,
          isCompleted ? styles.shoppingItemBtnCompleted : undefined,
        ]}
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
  shoppingItemCompleted: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorGrey,
  },
  shoppingItemText: {
    fontSize: 18,
    fontWeight: '200',
  },
  shoppingItemTextCompleted: {
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorLightGray,
  },
  shoppingItemBtn: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  shoppingItemBtnCompleted: {
    backgroundColor: theme.colorGrey,
  },
  shoppingItemBtnText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
