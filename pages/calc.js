import React from 'react';
import { useState } from 'react';
import { DateTime, Interval } from "luxon";
import CalcInput from '../components/calc/CalcInput'
import TableOutput from '../components/calc/TableOutput'

const Calc = () => {    
    const [capitalCredito, setCapitalCredito] = useState(0);
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [fechaLiquidacion, setFechaLiquidacion] = useState('');
    const [intereses, setIntereses] = useState(0);
    const [monthsArray, setMonthsArray] = useState([]);
    const [months, setMonths] = useState(0);
    const [monthRow, setMonthRow] = useState({});

    const calculate = () => {
        console.log('calculadooo')
    }
    

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
            {/* <h3>Fecha Vencimiento: {fechaVencimiento}</h3> */}
            {/* <h3>Fecha Liquidacion: {fechaLiquidacion}</h3> */}

            <TableOutput
                capitalCredito={capitalCredito}
                fechaVencimiento={fechaVencimiento}
                fechaLiquidacion={fechaLiquidacion}
            />
        </>
        )
}

export default Calc;