import axios from "axios"
import { useEffect, useState } from "react"

export enum StatusTypes {
  DEFAULT = "DEFAULT",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS"
}

export function useTGRequest() {
  const token = '5485860191:AAF6BcbMb6jJ5K_tsDFR5JMnEVX0BSD8zlI'
  const myChatId = 499857391
  const url = (text: string) => `https://api.telegram.org/bot${token}/sendMessage?chat_id=${myChatId}&parse_mode=html&text=${text}`

  const [isLoading, setIsLoading] = useState(false)

  const [status, setStatus] = useState(StatusTypes.DEFAULT)

  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (status !== StatusTypes.DEFAULT) setTimeout(() => setStatus(StatusTypes.DEFAULT), 2000)
    if (errorMsg !== '') setTimeout(() => setErrorMsg(''), 2000)
  }, [status, errorMsg])

  const sendRequest = (form: HTMLFormElement) => {

    setIsLoading(true)

    const data = new FormData(form)

    const dataArr = [
      data.get('firstName')?.toString() || "Не указано",
      data.get('lastName')?.toString() || "Не указано",
      data.get('phone')?.toString() || "Не указано",
      data.get('email')?.toString() || "Не указано",
      data.get('telegram')?.toString() || "Не указано",
      data.get('message')?.toString() || "Не указано",
    ]

    const text = `Новое сообщение от ${dataArr[1]} ${dataArr[0]}.%0AТелефон - ${dataArr[2]}.%0AПочта - ${dataArr[3]}.%0AТелеграм - ${dataArr[4]}.%0AСообщение:%0A${dataArr[5]}`

    axios.get(url(text)).then((e) => {
      setStatus(StatusTypes.SUCCESS); setIsLoading(false)
    }).catch((e) => { setErrorMsg(e.response.data.description); setStatus(StatusTypes.ERROR); setIsLoading(false) })
  }

  return {
    sendRequest,
    isLoading,
    status,
    errorMsg
  }
}