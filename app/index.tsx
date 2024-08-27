import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppingListItem';

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  { id: '1', name: 'Coffee' },
  { id: '2', name: 'Tea' },
  { id: '3', name: 'Sugar' },
];

export default function App() {
  const [list, setList] = useState(initialList);
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
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.homeContentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        style={styles.homeTextInput}
        placeholder="E.g. Coffee"
        value={value}
        onChangeText={setValue}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {list.map((item) => (
        <ShoppingListItem key={item.id} name={item.name} />
      ))}
      <StatusBar style="auto" />
    </ScrollView>
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
});
