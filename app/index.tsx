import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppingListItem';

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedTimestamp: number;
};

export default function App() {
  const [list, setList] = useState([] as ShoppingListItemType[]);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value) {
      const newList = [
        {
          id: new Date().toISOString(),
          name: value,
          lastUpdatedTimestamp: Date.now(),
        },
        ...list,
      ];
      setList(newList);
      setValue('');
    }
  };

  const handleDelete = (id: string) => {
    return () => {
      const newList = list.filter((item) => item.id !== id);
      setList(newList);
    };
  };

  const handleToggleComplete = (id: string) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
          lastUpdatedTimestamp: Date.now(),
        };
      }
      return item;
    });
    setList(newList);
  };

  function orderShoppingList(shoppingList: ShoppingListItemType[]) {
    return shoppingList.sort(
      (item1, item2) =>
        (item1.completedAtTimestamp ?? 0) - (item2.completedAtTimestamp ?? 0) ||
        item1.lastUpdatedTimestamp - item2.lastUpdatedTimestamp,
    );
  }

  return (
    <FlatList
      style={styles.home}
      contentContainerStyle={styles.homeContentContainer}
      ListHeaderComponent={
        <TextInput
          value={value}
          style={styles.homeTextInput}
          onChangeText={setValue}
          placeholder="E.g. Coffee"
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />
      }
      ListEmptyComponent={
        <View style={styles.homeEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
      }
      stickyHeaderIndices={[0]}
      data={orderShoppingList(list)}
      renderItem={({ item }) => (
        <ShoppingListItem
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={Boolean(item.completedAtTimestamp)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingVertical: 12,
  },
  homeContentContainer: {
    paddingBottom: 24,
  },
  homeTextInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  homeEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
});
