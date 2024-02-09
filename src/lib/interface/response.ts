
// Generated by https://quicktype.io

export interface Datos {
  responseId:  string;
  queryResult: QueryResult;
}

export interface QueryResult {
  queryText:                 string;
  parameters:                Parameters;
  fulfillmentText:           string;
  fulfillmentMessages:       FulfillmentMessage[] | {};
  intent:                    Intent;
  intentDetectionConfidence: number;
  languageCode:              string;
}

export interface FulfillmentMessage {
  text: Text;
}

export interface Text {
  text: string[];
}

export interface Intent {
  displayName: string;
}

export interface Parameters {
  talla?: string[];
  sexo?:  string;
  marca?: string;
  fields?: {}
}