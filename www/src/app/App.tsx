import { useState } from "react";
import Menu from "./unitsModals/UnitsMenu";



const App: React.FC = () => {
    
    document.title = "Temperature converter"

    const [inpValue, setInpValue] = useState<string>("0.00")
    const [fromUnits, setFromUnits] = useState<string>("From Units")
    const [toUnits, setToUnits] = useState<string>("To Units")
    const [openMenuTo, setOpenMenuTo] = useState<boolean>(false)
    const [openMenuFrom, setOpenMenuFrom] = useState<boolean>(false)
    
    return (
        <section className="main">
            <div className="converter">
                <h2>Temperature converter</h2>
                <p>Enter the temperature, select units and submit</p>
                <div className="panel">
                    <input className="value" type="text" value={inpValue} onChange={(e) => setInpValue(e.target.value)}/>
                    <div className="units">
                        <p onClick={() => setOpenMenuFrom(!openMenuFrom)}>
                            {fromUnits}
                            {openMenuFrom && <Menu setFromUnits={setFromUnits}/>}
                        </p>
                    </div>
                    <div className="units">
                        <p onClick={() => setOpenMenuTo(!openMenuTo)}>
                            {toUnits}
                            {openMenuTo && <Menu setToUnits={setToUnits}/>}
                        </p>
                    </div>
                    <button className="submitBtn">Convert</button>
                </div>
            </div>
        </section>
    )
}

export default App;