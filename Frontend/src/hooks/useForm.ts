import { useState } from "react";

export interface interfaceForm{
  name: any;
  commission: any;
  state: boolean;
}

type typeonChange = React.ChangeEvent<HTMLInputElement>; 

interface interfaceUseForm  {
  onInputChange:(event: typeonChange)=> void,
  formState: interfaceForm,
  onResetForm:() => void,
  setformState: (formState: interfaceForm) => void
}


export const useForm = (name?: string, commission?: number ) : interfaceUseForm => {
  
  const [formState, setformState] = useState<interfaceForm>({
    name: name,
    commission: commission,
    state: false
  })

  const  onInputChange = (event:typeonChange) => {
    const { target: { value, name } } = event;
    setformState({
      ...formState, 
      [name]:value
    })
  }

  const onResetForm = (): void => {
    setformState({
      name: '',
      commission: 0,
      state: false
    })
  }

  return {
    onInputChange,
    formState,
    onResetForm,
    setformState 
  }
}
