import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App() {
  const change = e => {
    setData(e);
  };
  const add = () => {
    setarray([...array, {name: data, id: Math.random()}]);
  };
  const renderItem = ({item}) => (
    <View style={styles.render}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>
        {data ? (
          <>
            <Text style={{color: 'yellow'}}></Text>
            <Text style={{color: 'black'}}>{item.name}</Text>
          </>
        ) : (
          item.name
        )}
      </Text>
    </View>
  );
  const [array, setarray] = useState([
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Coffee'},
    {id: 3, name: 'Oranges'},
    {id: 4, name: 'Bread'},
  ]);

  const [data, setData] = useState();
  const newr = () => {
    data ? array : filteredData;
  };
  const filteredData = data
    ? array.filter(x => x.name.toLowerCase().includes(data.toLowerCase()))
    : array;

  return (
    <>
      <StatusBar animated={true} backgroundColor="#61dafb" />

      <View style={styles.box}>
        <View style={styles.header}>
          <TextInput
            placeholder="Search"
            onChangeText={text => setData(text)}
            style={styles.input}
          />

          <View style={styles.line}></View>

          <View style={{marginVertical: 12}}>
            <TouchableOpacity onPress={add}>
              <Ionicons name="add-outline" size={42} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <FlatList data={filteredData} renderItem={renderItem} />
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  box: {flex: 1, paddingHorizontal: 20, paddingVertical: 9},
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '85%',
    padding: 12,
    height: 52,
    marginVertical: 6,
  },
  render: {
    borderColor: 'grey',
    marginVertical: 6,
    padding: 12,
    borderBottomWidth: 1,
  },
  line: {
    height: 71,
    backgroundColor: 'black',
    width: 1.3,
    marginHorizontal: 10,
  },
});
