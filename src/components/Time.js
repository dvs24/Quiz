
import { useState, useEffect } from 'react'

export default function Time(props) {

    const [time, setTime] = useState(30);

    useEffect(() => {

        if(time === 0) return props.setStop(true);

        const interval = setInterval(() => {

            setTime(prev => prev - 1)

        },1000);

        return ()=> clearInterval(interval);

    },[props.setStop,time]);

    useEffect(()=>{

        setTime(30);

    },[props.questionNumber])


    return time
}



