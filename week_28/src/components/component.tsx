import { useState } from 'react'
import './component.scss'

const TextForm = () => {
    const [text, setText] = useState(``)
    const [submittedText, setSubmittedText] = useState(``)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmittedText(text)
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setText(e.target.value)} value={text} />
                <input type="submit" value="Submit" />
            </form>
            <div className="textStyle">{submittedText.toUpperCase()}</div>
        </div>
    )
}

export default TextForm
