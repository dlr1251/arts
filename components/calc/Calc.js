import React from 'react';
import { useState } from 'react'
import CalcInput from './CalcInput'
import TableOutput from './TableOutput'

const Calc = () => {
    let d = new Date();
    let iDate = d.toString();

    const [capitalCredito, setCapitalCredito] = useState(0);
    const [fechaVencimiento, setFechaVencimiento] = useState(iDate);
    const [fechaLiquidacion, setFechaLiquidacion] = useState(iDate);
    const [intereses, setIntereses] = useState(0);
    const [monthsArray, setMonthsArray] = useState([]);    
    const [monthRow, setMonthRow] = useState([]);

    return (
        <>
            <CalcInput
                capitalCredito={capitalCredito}
                setCapitalCredito={setCapitalCredito}
                fechaVencimiento={fechaVencimiento}
                setFechaVencimiento={setFechaVencimiento}
                fechaLiquidacion={fechaLiquidacion}
                setFechaLiquidacion={setFechaLiquidacion}
                monthsArray={monthsArray}
                setMonthsArray={setMonthsArray}                                
                monthRow={monthRow}
                setMonthRow={setMonthRow}
            />                        
            <TableOutput
                capitalCredito={capitalCredito}
                monthsArray={monthsArray}                                

            />
        </>
    )
}

export default Calc;