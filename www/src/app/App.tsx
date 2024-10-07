import { useState } from "react";
import Menu from "./unitsModals/UnitsMenu";
import { convert } from "./utils/converters";


const App: React.FC = () => {
    
    document.title = "Temperature converter"

    const [inpValue, setInpValue] = useState<string>("0.00")
    const [fromUnits, setFromUnits] = useState<string>("From Units")
    const [toUnits, setToUnits] = useState<string>("To Units")
    const [openMenuTo, setOpenMenuTo] = useState<boolean>(false)
    const [openMenuFrom, setOpenMenuFrom] = useState<boolean>(false)
    const [result, setResult] = useState<string>("")

    const openTo = () => {
        setOpenMenuTo(!openMenuTo)
        setOpenMenuFrom(false)
    }

    const openFrom = () => {
        setOpenMenuFrom(!openMenuFrom)
        setOpenMenuTo(false)
    }

    const resultHandler = () => {
        setResult(convert(fromUnits, toUnits, Number(inpValue))!.toString())
    }


    
    return (
        <section className="main">
            <div className="converter">
                <h2>Temperature converter</h2>
                <p>Enter the temperature, select units and submit</p>
                <div className="panel">
                    <input className="value" type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)}/>
                    <div className="units" onClick={openFrom}>
                        <p>
                            {fromUnits}
                        </p>
                        {openMenuFrom && <Menu setFromUnits={setFromUnits}/>}
                    </div>
                    <div className="units" onClick={openTo}>
                        <p>
                            {toUnits}
                        </p>
                        {openMenuTo && <Menu setToUnits={setToUnits}/>}
                    </div>
                    <button onClick={resultHandler} className="submitBtn">Convert</button>
                </div>
                {result && <p className="result">{inpValue} {fromUnits} is {result} {toUnits}</p>}
            </div>
        </section>
    )
}

export default App;