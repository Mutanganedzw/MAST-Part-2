// App.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MenuForm from './MenuForm';  // Import the form component

const App = () => {
  const [menu, setMenu] = useState([]);  // State to store menu items

  // Function to add a new menu item
  const addMenuItem = (item) => {
    setMenu([...menu, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>

      {/* Display total menu items */}
      <Text style={styles.total}>Total Menu Items: {menu.length}</Text>

      {/* Display list of menu items */}
      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>Price: {item.price}</Text>
          </View>
        )}
      />

      {/* Form for adding menu items */}
      <MenuForm addMenuItem={addMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  total: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  }, 
});

export default App;
