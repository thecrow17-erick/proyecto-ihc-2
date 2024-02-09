import {dialogFlowApi} from '../api';
// import {Datos} from '../lib/interface/response'

export const dialogflowQuery = async(text:string): Promise<any|undefined> =>{
  try {
    const {data} = await dialogFlowApi.post<any>('dialogflow',{
      queryText: text
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const dialogflowGet = async():Promise<any|undefined> =>{
  try {
    const {data} = await dialogFlowApi.get<any>('dialogflow')
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
