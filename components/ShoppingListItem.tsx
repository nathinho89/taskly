import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import { theme } from '../theme';
import AntDesign from '@expo/vector-icons/AntDesign';

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'It will be gone for good',
      [
        {
          text: 'Yes',
          onPress: () => onDelete(),
          style: 'destructive',
        },
        { text: 'Cancel', style: 'cancel' },
      ],
    );
  };

  return (
    <Pressable
      style={[
        styles.shoppingItem,
        isCompleted ? styles.shoppingItemCompleted : undefined,
      ]}
      onPress={onToggleComplete}
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
        style={styles.shoppingItemBtn}
        onPress={handleDelete}
        activeOpacity={0.8}
        aria-label="Delete"
      >
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shoppingItem: {
    borderBottomColor: theme.colorCerulian,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
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
    padding: 8,
  },
});
