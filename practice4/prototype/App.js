import React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';

const DATA = [
  { id: '1', title: 'Result Item 1' },
  { id: '2', title: 'Result Item 2' },
  { id: '3', title: 'Result Item 3' },
  { id: '4', title: 'Result Item 4' },
  { id: '5', title: 'Result Item 5' },
  { id: '6', title: 'Result Item 6' },
  { id: '7', title: 'Result Item 7' },
  { id: '8', title: 'Result Item 8' },
  { id: '9', title: 'Result Item 9' },
  { id: '10', title: 'Result Item 10' },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

export default function App() {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});
