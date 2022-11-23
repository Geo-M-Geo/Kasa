import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'

function Collapse(titleCollapse, DescriptionCollapse) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <button onClick={() => setIsOpen(false)}>
                <h3>{titleCollapse}</h3>
                {vectorDown}
            </button>
        </div>
    ) : (
        <div>
        <button onClick={() => setIsOpen(true)}>
            <h3>{titleCollapse}</h3>
                {vectorUp}
        </button>
        <p>
            {DescriptionCollapse}
        </p>
        </div>
    )
}

export default Collapse