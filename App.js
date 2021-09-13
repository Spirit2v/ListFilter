import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App() {
  const change=(e)=>{
    setData(e)
  }
  const add =()=>{
    setarray([...array,{name:data,id:Math.random()}])
  }
  const renderItem = ({item}) => (
  //   <View>
  //     {data ? (
  //       // <View>{data == item.name ? <Text>{data}</Text> : null}</View>
  //       item.filter((val)=>{
  //         val.name.toLowerCase().includes(data.toLowerCase())
  //       }).map((val,key) => {

  // <Text>{val.name}</Text>

  //       })
  //     ) : (
        <View
          style={{
            borderColor: 'grey',
            marginVertical: 6,
            padding: 12,
            borderBottomWidth: 1,
          }}>
          <Text style={{fontWeight: 'bold'}}>{data ?
          <>
      <Text
      style={{color:'yellow'}}
      >{data}
      </Text>  
          <Text
          style={{color:'black'}}
          >{ item.name}
          </Text></>   :
        item.name
        }</Text>
        </View>
    //   )}
    // </View>
  );
  const [array, setarray] = useState([
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Coffee'},
    {id: 3, name: 'Oranges'},
    {id: 4, name: 'Bread'},
  ]);
  const arr = [
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Coffee'},
    {id: 3, name: 'Oranges'},
    {id: 4, name: 'Bread'},
  ];
  const [data, setData] = useState();
const newr=()=>{
data ? array
:
filteredData
}
  const filteredData = data
  ? array.filter(x =>
      x.name.toLowerCase().includes(data.toLowerCase())
    )
  : array;
  return (
    <>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 9}}>
        <View
          style={{
            flexDirection: 'row',

            borderBottomWidth: 1,
          }}>
          <TextInput
            placeholder="Search"
            onChangeText={change}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '85%',
              padding: 12,
              height: 52,
              marginVertical: 6,
            }}
          />

          {/* <Text>{data}</Text> */}
          <View
            style={{
              height: 71,
              backgroundColor: 'black',
              width: 1,
              marginHorizontal: 13,
            }}></View>
          <View style={{marginVertical: 12}}>
            <TouchableOpacity onPress={add}>
              <Ionicons name="add-outline" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>{data}</Text>
          
      
          <FlatList data={filteredData} renderItem={renderItem} />
        </View>
        <Text></Text>
      </View>
    </>
  );
}
