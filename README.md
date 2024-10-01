# MAST-Part-2
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

// MenuForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Picker, StyleSheet } from 'react-native';

const MenuForm = ({ addMenuItem }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  // Function to handle adding new items
  const handleAddItem = () => {
    if (dishName && description && price && course) {
      addMenuItem({ dishName, description, price, course });
      setDishName('');
      setDescription('');
      setPrice('');
      setCourse('');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(value) => setCourse(value)}
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <Button title="Add Menu Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default MenuForm;
