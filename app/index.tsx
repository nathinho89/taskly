import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppingListItem';

type ShoppingListItemType = {
  id: string;
  name: string;
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
        },
        ...list,
      ];
      setList(newList);
      setValue('');
    }
  };

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
      data={list}
      renderItem={({ item }) => <ShoppingListItem name={item.name} />}
    />
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
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
