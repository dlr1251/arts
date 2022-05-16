import React from 'react';
import { DateTime, Interval } from "luxon";

const CalcInput = (props) => {

    
    const getMonths = () => {
                
        let ini = new Date(props.fechaVencimiento);
        let fin = new Date(props.fechaLiquidacion);
        let inter = Interval.fromDateTimes(ini, fin);        
        props.setMonths(Math.ceil(inter.length('months')))
        
        let copyOfMonthRow = props.monthRow;        
        let mesVigente;
        for (let i = 0; i < props.months; i++) {
            
            if (i === 0) {
                let inicioMes = DateTime.fromISO(props.fechaVencimiento).toLocaleString();
                let finMes = DateTime.fromISO(props.fechaVencimiento).endOf('month').toLocaleString()
                mesVigente = new Date(finMes);
                props.setMonthRow({inicioMes, finMes, mesVigente})
                // console.log(props.monthRow);
                                                
            } else if (i < props.months-1) {
                mesVigente = DateTime.local(props.monthRow.mesVigente);
                mesVigente = mesVigente.plus({ months: 1 }).toISODate();
                console.log(mesVigente);
                props.setMonthRow({mesVigente})                
                // console.log(props.monthRow);
                                                
                
            } else {
                
                // console.log(monthRow)  
                // console.log(monthRow.mesVigente)             
            }
            
            // months === 0 ? monthRow.inicioMes = props.fechaLiquidacion :  monthRow.inicioMes = mesVigente
            
            // props.monthRow = {
                // mesIndex: i+1, // key Index
                // mesVigente: 5, // Obtener mismo mes de finMes. 
                // inicioMes:  '13-05-2022', // El primer mes ? fechaLiquidacion : el día primero del mes siguiente al vigente.
                // finMes: '31-05-2022', // El ultimo mes ? fechaVencimiento : el último día del mes vigente.
                // mesInicio: 3, // fechaLiquidacion.getMonth();
                // porcionMes: 0.5, // contar dias entre inicioMes y finMes
                // tasaAnual: 32.4, // obtener de mesVigente y buscar en la tabla de intereses.js 
                // tasaMensual: 1.54, // formula alienígena
                // intereses: 343000 // capitalCredito * porcionMes * tasaMensual.
            // }   

            // monthsArray.push(monthRow);            
            
        }
        // console.log(monthsArray);
    }


    const handleChange = (e) => {
        props.setCapitalCredito(e.target.value)        
    }
    const handleChangeFV = (e) => {
        props.setFechaVencimiento(e.target.value)      
        getMonths();
    }
    const handleChangeFL = (e) => {
        props.setFechaLiquidacion(e.target.value)      
        getMonths();
    }
    // getMonths();
        
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

export default CalcInput