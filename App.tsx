import { Text , View ,  TouchableOpacity, SafeAreaView } from 'react-native';
import Voice, {SpeechStartEvent,SpeechEndEvent,SpeechResultsEvent} from '@react-native-voice/voice';
import { useEffect, useState } from 'react';

export const App = () => {
  const [result, setResult] = useState('');
  const [isRecording,setIsRecording] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    return ()=>{
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpeechStart = (e:SpeechStartEvent) =>{
    console.log(e);
  }
  const onSpeechEnd = (e:SpeechEndEvent)=>{
    console.log(e);
  }
  const onSpeechResults = (e:SpeechResultsEvent)=>{
    console.log(e);
    setResult(e.value![0]);
  }

  const startRecording = async()=>{
    try {
      await Voice.start('es-ES');
      setIsRecording(true);
    } catch (error) {
      console.log(error);
    }
  }
  const stopRecording = async()=>{
    try {
      await Voice.stop();
      setIsRecording(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <View 
        style={{paddingHorizontal: 10,paddingVertical: 20,backgroundColor: '#9bc1bc' }}
      >
        <Text style={{color: 'black',fontSize:30, fontWeight: 'bold' }}> Voice to Text</Text>
      </View>
      <Text style={{paddingHorizontal: 5,color: 'black',fontSize:20, }}>Resultado: {result}</Text>
      <View 
        style={{alignItems: 'center', justifyContent: 'center' , height: 100, width: 'auto'}}
      >
        <TouchableOpacity
          style={{backgroundColor: `${isRecording?'#ff7676':'#B4FF9A'}`,padding: 10,borderRadius: 10}}
          onPress={ isRecording? stopRecording : startRecording}
        >
          <Text
          style={{color:`${isRecording? 'red':'green'}`, fontSize:20}}
          >{isRecording? 'Dejar de grabar': 'Grabar'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};
