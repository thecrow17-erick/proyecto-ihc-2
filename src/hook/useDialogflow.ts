import {useMutation} from '@tanstack/react-query'

import {dialogflowQuery} from '../query'

export const useDialogflow = ()=>{
  const mutation = useMutation({
    mutationFn: dialogflowQuery,
    onMutate: (body)=>{
      console.log(body);
    }
  });
  
  return {
    ...mutation
  }
}
