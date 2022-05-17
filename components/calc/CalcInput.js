import React from 'react';
import { useEffect } from 'react';

import { 
        endOfMonth, 
        startOfMonth,
        getMonth, 
        format,
        addMonths, 
        getDaysInMonth, 
        differenceInDays,
        eachMonthOfInterval
    }  from 'date-fns';

const CalcInput = (props) => {

    useEffect(() => {  
        console.log('effected');
        getMonths();
       }, [props.fechaVencimiento, props.fechaLiquidacion, props.capitalCredito] )
    

    const getMonths = () => {
        let start;
        let end;        
        let tableRow = [];

        props.fechaVencimiento === '' ?  start = new Date() :  start = new Date(props.fechaVencimiento);
        props.fechaLiquidacion === '' ?  end = new Date() :  end = new Date(props.fechaLiquidacion);        
        
        let inter = eachMonthOfInterval({start, end});                                        

        inter.map((month, i) => {
            if (i === 0) {
                let inicioMes = new Date(props.fechaVencimiento)
                let finMes = endOfMonth(inicioMes);
                let mesVigente = getMonth(finMes);
                let porcionMes = differenceInDays(finMes, inicioMes )/getDaysInMonth(mesVigente);
                let formated = `${((mesVigente + 1) < 10 ? '0' : '')  (mesVigente + 1) }-${inicioMes.getFullYear()}`;
                let tasaAnual = intereses[formated].usura

                tableRow.push({inicioMes, finMes, mesVigente, porcionMes, tasaAnual});
                
            } else if (i < inter.length-1) {                
                let inicioMes = startOfMonth(addMonths(start, i));
                let finMes = endOfMonth(inicioMes);
                let mesVigente = getMonth(finMes);                
                let porcionMes = differenceInDays(finMes, inicioMes )/getDaysInMonth(finMes)
                let formated = `${((mesVigente + 1) < 10 ? '0' : '') + (mesVigente + 1)}-${inicioMes.getFullYear()}`;                
                let tasaAnual = intereses[formated].usura
                tableRow.push({inicioMes, finMes, mesVigente, porcionMes, tasaAnual});

            } else {
                let finMes = new Date(props.fechaLiquidacion)
                let inicioMes = startOfMonth(finMes);
                let mesVigente = getMonth(finMes);                
                let porcionMes = differenceInDays(finMes, inicioMes )/getDaysInMonth(finMes);
                let formated = `${((mesVigente + 1) < 10 ? '0' : '') + (mesVigente + 1) }-${inicioMes.getFullYear()}`;
                let tasaAnual = intereses[formated].usura
                
                tableRow.push({inicioMes, finMes, mesVigente, porcionMes, tasaAnual});

            }

        })

        props.setMonthsArray(tableRow);

    }


    const handleChange = (e) => {
        props.setCapitalCredito(e.target.value)        
    }
    const handleChangeFV = (e) => {
        props.setFechaVencimiento(e.target.value)      

    }
    const handleChangeFL = (e) => {
        props.setFechaLiquidacion(e.target.value)        
    }

    return (
        <div>
            <div className="p-4">
                Valor
                <input 
                    className="border-solid border-2 border-sky-500" 
                    value={props.capitalCredito}
                    onChange={handleChange}
                    type="number" />
                
            </div>
            <div className="p-4">
                Fecha Vencimiento
                <input 
                    className="border-solid border-2 border-sky-500" 
                    value={props.fechaVencimiento}
                    onChange={handleChangeFV}
                    type="date" />
            </div>
            <div className="p-4">
                Fecha Liquidación
                 <input 
                    className="border-solid border-2 border-sky-500" 
                    value={props.fechaLiquidacion}
                    onChange={handleChangeFL}
                    type="date" />
            </div>
        </div>
    )
}

const intereses = 
{
    '10-2017': { interes: 21.15, usura: 31.73 },
    '11-2017': { interes: 20.96, usura: 31.44 },
    '12-2017': { interes: 20.77, usura: 31.16 },
    '01-2018': { interes: 20.69, usura: 31.04 },
    '02-2018': { interes: 21.01, usura: 31.52 },
    '03-2018': { interes: 20.68, usura: 31.02 },
    '04-2018': { interes: 20.48, usura: 30.72 },
    '05-2018': { interes: 20.44, usura: 30.66 },
    '06-2018': { interes: 20.28, usura: 30.42 },
    '07-2018': { interes: 20.03, usura: 30.05 },
    '08-2018': { interes: 19.94, usura: 30.05 },
    '09-2018': { interes: 19.81, usura: 30.05 },
    '10-2018': { interes: 19.63, usura: 29.45 },
    '11-2018': { interes: 19.49, usura: 29.24 },
    '12-2018': { interes: 19.40, usura: 29.10 },
    '01-2019': { interes: 19.16, usura: 28.74 },
    '02-2019': { interes: 19.70, usura: 28.74 },
    '03-2019': { interes: 19.37, usura: 29.06 },
    '04-2019': { interes: 19.32, usura: 28.98 },
    '05-2019': { interes: 19.34, usura: 29.01 },
    '06-2019': { interes: 19.30, usura: 29.01 },
    '07-2019': { interes: 19.28, usura: 28.92 },
    '08-2019': { interes: 19.32, usura: 28.98 },
    '09-2019': { interes: 19.32, usura: 28.98 },
    '10-2019': { interes: 19.10, usura: 28.65 },
    '11-2019': { interes: 19.03, usura: 28.55 },
    '12-2019': { interes: 18.91, usura: 28.37 },
    '01-2020': { interes: 18.77, usura: 28.16 },
    '02-2020': { interes: 19.06, usura: 28.59 },
    '03-2020': { interes: 18.95, usura: 28.43 },
    '04-2020': { interes: 18.69, usura: 28.04 },
    '05-2020': { interes: 18.19, usura: 27.29 },
    '06-2020': { interes: 18.12, usura: 27.18 },
    '07-2020': { interes: 18.12, usura: 27.18 },
    '08-2020': { interes: 18.29, usura: 27.44 },
    '09-2020': { interes: 18.35, usura: 27.53 },
    '10-2020': { interes: 18.09, usura: 27.14 },
    '11-2020': { interes: 17.84, usura: 26.76 },
    '12-2020': { interes: 17.46, usura: 26.19 },
    '01-2021': { interes: 17.32, usura: 25.98 },
    '02-2021': { interes: 17.54, usura: 26.31 },
    '03-2021': { interes: 17.41, usura: 26.12 },
    '04-2021': { interes: 17.31, usura: 25.97 },
    '05-2021': { interes: 17.22, usura: 25.83 },
    '06-2021': { interes: 17.21, usura: 25.82 },
    '07-2021': { interes: 17.18, usura: 25.77 },
    '08-2021': { interes: 17.24, usura: 25.86 },
    '09-2021': { interes: 17.19, usura: 25.79 },
    '10-2021': { interes: 17.08, usura: 25.62 },
    '11-2021': { interes: 17.27, usura: 25.91 },
    '12-2021': { interes: 17.46, usura: 26.19 },
    '01-2022': { interes: 17.66, usura: 26.49 },
    '02-2022': { interes: 18.30, usura: 26.49 },
    '03-2022': { interes: 18.47, usura: 27.71 },
}

export default CalcInput;