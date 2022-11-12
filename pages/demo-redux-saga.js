import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { demo } from "../redux/actions/demo"

const TextInput = () => {
    const [text, setText] = useState("")
    const items = useSelector(state => state.demo)
    const dispatch = useDispatch()

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onClick = () => {
        dispatch(demo(text))
        setText("")
    }

    return <>
        <pre>{JSON.stringify(items, null, 4)}</pre>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>add</button>
    </>
}

export default function App(){
    return <TextInput/>
}