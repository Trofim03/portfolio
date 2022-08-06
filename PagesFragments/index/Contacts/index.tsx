import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatedBlock } from "../../../components/AnimateBlock/AnimatedBlock";
import InputMask from 'react-input-mask';
import css from './Contacts.module.scss'

import LoadingSVG from '../../../public/svg/loading.svg'
import { StatusTypes, useTGRequest } from "../../../hooks/useTGRequest";
import { BlockLayout } from "../../../components/BlockLayout";
import { useContactsData } from '../../../hooks/useFakeData/useFakeData'

export function Contacts() {
  const [openInputs, setOpenInputs] = useState<string[]>([])

  const { sendRequest, isLoading, status, errorMsg } = useTGRequest()

  const { title, inputs } = useContactsData(css, openInputs)

  const { t } = useTranslation()

  const formHandler = (e: any) => {
    e.preventDefault()

    sendRequest(e.target)
  }

  const classHandler = (e: any) => {
    if (!e.target.value) setOpenInputs(openInputs.filter(inputId => inputId !== e.target.id))
  }

  const getInputs = () => {
    return inputs.map((inputEl, i) => {

      const inputProps = {
        type: inputEl.type,
        name: inputEl.name,
        id: inputEl.name + i,
        required: inputEl.required,
        key: inputEl.name + i,
        onClick: () => setOpenInputs([...openInputs, inputProps.id]),
        onInput: () => setOpenInputs([...openInputs, inputProps.id]),
        onBlur: classHandler
      }

      return (
        <AnimatedBlock key={i} plus={.1 * i} className={inputEl.className(inputProps.id)}>
          <label htmlFor={inputProps.id}>{t(`main.formInputs.${inputEl.name}`)}{inputProps.required ? "*" : ""}</label>
          {inputEl.elem === 'input' && <input {...inputProps} /> || <></>}
          {inputEl.elem === 'textarea' && <textarea {...inputProps} /> || <></>}
          {inputEl.elem === 'InputMask' && <InputMask mask={inputEl.mask} {...inputProps} /> || <></>}
        </AnimatedBlock>
      )
    })
  }

  const getBtn = () => {
    const [className, setClassName] = useState('')

    useEffect(() => {
      if (status === StatusTypes.DEFAULT) {
        setClassName('')
      } else if (status === StatusTypes.SUCCESS) {
        setClassName(css.sendOk)
      } else {
        setClassName(css.sendError)
      }
    }, [status])

    return (
      <button className={className} disabled={isLoading || status !== StatusTypes.DEFAULT}>
        {errorMsg ? errorMsg : <>{isLoading ? <LoadingSVG /> : ""}{t(`main.formInputs.submit`)}</>}
      </button>
    )
  }

  return (
    <BlockLayout title={title}>
      <div className={css.content}>
        <form onSubmit={(e) => formHandler(e)} className={css.form}>
          {getInputs()}
          {getBtn()}
        </form>
      </div>
    </BlockLayout>
  )
}