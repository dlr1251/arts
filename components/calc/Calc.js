import React from 'react';
import { useState } from 'react'
import CalcInput from './CalcInput'
import TableOutput from './TableOutput'

const Calc = () => {
    const [capitalCredito, setCapitalCredito] = useState(0);
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [fechaLiquidacion, setFechaLiquidacion] = useState('');
    const [intereses, setIntereses] = useState(0);
    const [monthsArray, setMonthsArray] = useState([]);
    const [months, setMonths] = useState(0);
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
                months={months}
                setMonths={setMonths}
                monthRow={monthRow}
                setMonthRow={setMonthRow}
            />
            <h3>Capital Credito: {capitalCredito}</h3>
            <TableOutput
                capitalCredito={capitalCredito}
                fechaVencimiento={fechaVencimiento}
                fechaLiquidacion={fechaLiquidacion}
            />
        </>
    )
}

export default Calc;