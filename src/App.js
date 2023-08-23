import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import PatikaStore_data from './PatikaStore_data.json';
import ProductCard from './Card/ProductCard';

function App(){

  const renderProduct = ({item}) => <ProductCard product={item}/>;
  const keyExtractorfuc = (item,index) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput inlineImageLeft='search_icon' 
      placeholder='Ara...'
      style={styles.searchImput}/>
      <View style={styles.flatList}>
        <FlatList 
        data={PatikaStore_data}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={keyExtractorfuc}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{    
    flex: 1,
    backgroundColor:"#480ca8",
    },
  title:{    
    fontFamily: "Helveticao",
    fontSize: 30,
    color: "#fffe4c",
    fontWeight: "bold",
    marginLeft:10,
    marginTop:10,
    marginRight:10,
  },
  searchImput:{    
    backgroundColor: "#f4f3ee",
    borderRadius: 15,
    padding: 7,
    fontSize: 18,
    margin:10,
    },
    flatList:{    
    backgroundColor:"#4d43ee",
    alignItems:"center",
    marginBottom:110,
    borderRadius:10
    },
});
export default App;
