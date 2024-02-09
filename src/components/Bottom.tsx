import { StyleSheet, View } from 'react-native';
import {Button} from 'react-native-paper'
import IconMicrophone from 'react-native-vector-icons/FontAwesome'
import IconRepeat from 'react-native-vector-icons/Feather'
import { useDialogflow, useTts } from '../hook';
import {useEffect, useState } from 'react';
import Voice, { SpeechErrorEvent, SpeechResultsEvent } from '@react-native-voice/voice';
import { Loading } from '../ui/components';

export const Bottom = () => {
  const [text, setText] = useState('') 
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const tts = useTts();
  const dialogflow = useDialogflow()
  useEffect(() => {
    Voice.onSpeechStart = e => console.log(e);
    Voice.onSpeechEnd = e => console.log(e);
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
  
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (e: SpeechResultsEvent) => {
    dialogflow.mutate(e.value![0],{
      onSuccess:(data)=>{
        tts.speak(data?.queryResult.fulfillmentText!);
        setText(data?.queryResult.fulfillmentText!)
        console.log('====================================');
        console.log(data?.queryResult.parameters.fields);
        console.log('====================================');
      },
    })
  }

  const onSpeechError =(e: SpeechErrorEvent) => {
    console.log(e.error?.message);
  };
  const startRecording =  async () => {
    try {
      await Voice.start('es-ES');
      setIsRecording(true);
    } catch (error) {
      console.log(error);
    }
  }

  const pressOnRepeat = ()=>{
    tts.speak(text);
  }


  const onPressStop = async()=>{
    try {
      await Voice.stop();
      setIsRecording(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{flexDirection: 'row', height: 'auto'}}
    >
      <Button 
      disabled={dialogflow.isPending || tts.isSpeach }
      onPress={isRecording? onPressStop: startRecording}
      mode="contained" style={{...styled.buttonMicrophone,
        backgroundColor: `${isRecording? '#ff4040': '#92e27a'}`
      }} >
        <View >
          {
            tts.isSpeach? (<Loading/>):
            isRecording?
            (
              <IconMicrophone style={{textAlign:'center'}} name="microphone-slash" size={30} color="#000"/>
              ):
              (
                <IconMicrophone style={{textAlign:'center'}} name="microphone" size={30} color="#000"/>
              )
          }
        </View>
      </Button>
      <Button 
      onPress={pressOnRepeat}
      disabled={dialogflow.isPending || tts.isSpeach }
      mode="contained" style={styled.buttonRepeat} >
        <View >
          <IconRepeat style={{textAlign:'center'}} name="repeat" size={30} color="#000"/>
        </View>
      </Button>
    </View>
  )
}

const styled = StyleSheet.create({
  buttonMicrophone:{
    display: 'flex',
    justifyContent:'center',
    width: 80,
    height: 70,
  },
  buttonRepeat:{
    display: 'flex',
    justifyContent:'center',
    width: 80,
    height: 70,
    backgroundColor: '#b4b4b4',
    marginLeft: 10
  }
})
