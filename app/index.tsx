import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TextInput } from 'react-native';
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
    <View style={styles.home}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  homeTextInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});
