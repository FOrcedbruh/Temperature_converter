import { Dispatch, SetStateAction } from "react"
import { units } from "./units"

interface MenuPropsType {
    setFromUnits?: Dispatch<SetStateAction<string>>,
    setToUnits?: Dispatch<SetStateAction<string>>
}

const Menu: React.FC<MenuPropsType> = ({ setFromUnits, setToUnits }) => {

    const unitsHandler = (unit: string) => {
        if (setFromUnits) {
            setFromUnits(unit)
        }
        else if (setToUnits) {
            setToUnits(unit)
        }
    }

    return (
        <div className="menu">
            {units.map(unit => {
                return (
                    <p onClick={() => unitsHandler(unit)} key={unit}>
                        {unit}
                    </p>
                )
            })}
        </div>
    )
}

export default Menu;