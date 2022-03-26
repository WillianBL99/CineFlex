import { useState } from "react"

export default function Seat({ seat: { id, name, isAvailable }, selecteds, setSelecteds }) {
    const [selected, setSelected] = useState(false)

    function verifySelected() {

        if (isAvailable) {
            if (!selected) setSelecteds([...selecteds, id])

            else {
                const index = selecteds.indexOf(id)

                setSelecteds([...selecteds.slice(0, index), ...selecteds.splice(index + 1)])
            }

            setSelected(!selected)
        }
        else alert('Assento indisponível')

    }

    return (
        <div
            key={id}
            onClick={verifySelected}
            className={`seat ${!isAvailable ? 'unavailable' : selected ? 'selected' : ''}`}
        >
            {name}
        </div>
    )
}