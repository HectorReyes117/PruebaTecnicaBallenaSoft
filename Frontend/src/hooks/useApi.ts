import { useEffect, useState } from "react";
import { Response } from "../interfaces/IApi";
import { interfaceForm } from "./useForm";


export const useApi = () => {

  const [data, setData] = useState<Response>();
  const [responseState, setResponseState] = useState<Response>();
  let token = '1234';

  const get = async() => {
    const response = await fetch('https://localhost:7137/api/Insurance', {
      method: 'GET',
      headers: {
        token: token
      }
    });
    const data : Response = await response.json();
    setData({
      ...data,
      data: data.data
    })
  }

   const post = async(formState: interfaceForm) => {
    const response = await fetch('https://localhost:7137/api/Insurance', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        token: token
      },
      body: JSON.stringify(formState)
    });
    const data : Response = await response.json();
    setResponseState(data)
  }

  const put = async(formState: interfaceForm, id: number) => {
    const response = await fetch(`https://localhost:7137/api/Insurance?id=${id}`, {
      method: 'PUT',
      headers:{
        "Content-Type": "application/json",
        token: token
      },
      body: JSON.stringify({
        ...formState
      })
    });

    const data : Response = await response.json();
    setResponseState(data)
  }

  const deleteInsu = async(id: number) => {
    const response = await fetch(`https://localhost:7137/api/Insurance?id=${id}`, {
      method: 'DELETE',
      headers:{
        "Content-Type": "application/json",
        token: token
      }
    });

    const data : Response = await response.json();
    setResponseState(data)
  }

  useEffect(() => {
    get()
  }, [responseState])

  return {
    data,
    post,
    put,
    deleteInsu,
    get,
    responseState
  }
}
