import React, { useEffect, useState } from 'react'
import bot from "../../public/bot.png"
import user from "../../public/user.png"
import Loader from "./Loader"

function ChatBot() {
    const [sms, setSms] = useState(false)
    const [state, setState] = useState(false)
    const [loader, setLoader] = useState(false)
    const [answer, setAnswer] = useState("")

  function setTimeout1() {
    setAnswer("Заказать пиццу")
    setLoader(true)
    setTimeout(() => {
        setState(!state)
    }, 3000)
    setTimeout(() => {
        setLoader(false)
    }, 3000)
  }
  function setTimeout2() {
    setAnswer("Установить будильник")
    setLoader(true)
    setTimeout(() => {
        setState(!state)
    }, 3000)
    setTimeout(() => {
        setLoader(false)
    }, 3000)
  }
  function setTimeout3() {
    setAnswer("Вывести погоду")
    setLoader(true)
    setTimeout(() => {
        setState(!state)
    }, 3000)
    setTimeout(() => {
        setLoader(false)
    }, 3000)
  }

  return (
    <div className='chatBot'>
        <div className='smsBot'>
            <img src={bot} alt='' />
            <div className='smsKaptch'>
                <div className='soobsh'>
                    <p>Привет!</p>
                    <p>Что я могу для Вас сделать?</p>
                </div>
            </div>
        </div>
        {
            !state && (
                <div className='buttonsBot'>
                    <button onClick={() => setTimeout1()} className='btn1'>
                        <p>Заказать пиццу</p>
                    </button>
                    <button onClick={() => setTimeout2()} className='btn1'>
                        <p>Установить будильник</p>
                    </button>
                    <button onClick={() => setTimeout3()} className='btn1'>
                        <p>Вывести погоду</p>
                    </button>
                </div>
            )
        }
        {
            state && (
                <div className='smsUser'>
                    <div className='smsKaptch2'>
                        <div className='soobsh2'>
                            <p>Привет!</p>
                            <p>{`${answer}`}</p>
                        </div>
                    </div>
                    <img src={user} alt='' />
                </div>
            )
        }
        {
            loader && (
                <div className='smsUser'>
                    <div className='smsKaptch2'>
                        <Loader />
                    </div>
                    <img src={user} alt='' />
                </div>
            )
        }
        {
            state && (
                <div className='smsBot'>
                    <img src={bot} alt='' />
                    <div className='smsKaptch'>
                        <div className='soobsh'>
                            <p>Хорошо</p>
                            <p>Что ещё могу сделать?</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ChatBot