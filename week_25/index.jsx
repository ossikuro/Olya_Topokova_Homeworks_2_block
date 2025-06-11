// классовый компоненнт
class Counter extends Component {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }))
    }
    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>
    }
}

// функциональный компонент (переписываем по дз)
import React, { useEffect, useState } from 'react'

function counterFunctional() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count++)
    }

    return <button onClick={handleClick}>{count}</button>
}
