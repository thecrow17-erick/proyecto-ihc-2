import { View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
//import { sleep } from './helper/sleep';
import { Bottom } from './components';

export const App = () => {
  return (
    <SafeAreaView 
    style={{
      flex: 3,
      display: 'flex',
      justifyContent: 'space-between'
    }}
    >
      <View 
        style={{paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#ffba6a' }}
      >
        <Text style={{color: 'white',fontSize:30, fontWeight: 'bold' }}> Tienda de zapatos Erick's</Text>
      </View>
      <View style={{height:60, paddingHorizontal: 10}}>
        <Text variant="bodyLarge" style={{color: 'black'}}>
          Por favor, hablele al bot para saber que productos se quiere llevar.
        </Text>
      </View>
      <View 
        style={{alignItems: 'center', justifyContent: 'center' , height: 100, width: 'auto'}}
      >
        <Bottom/>
      </View>
    </SafeAreaView>
  )
};
