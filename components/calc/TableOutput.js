import React from 'react';

/**
 *  
 *  Periodo (inicio-fin)
 *  Porcion mes
 *  Tasa anual
 *  Tasa mensual
 *  Capital
 *  Intereses.
 * 
 */

const TableOutput = (props) => {

    console.log(props.monthsArray)
    return (
        <div>
            <table className="hover:table-fixed">
                <thead>
                    <tr>
                    <th>Inicio Mes</th>
                    <th>Fin de mes</th>
                    <th>Porcion mes</th>
                    <th>Tasa anual</th>
                    <th>Tasa mensual</th>
                    <th>Intereses</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        [1,2,3,4].map( (month, i) => {
                            return (
                                    <tr key={i}>
                                        <td>{month.inicioMes} </td>
                                        <td>{month.finMes} </td>
                                        <td>{month.porcionMes}</td>
                                        <td>{month.tasaAnual}</td>
                                        <td>{`e`}</td>
                                        <td>{month.porcionMes * month.tasaAnual * props.capitalCredito}</td>
                                    </tr>
                                )
                            })
                    }                                      
                </tbody>
            </table>
        </div>
    )
}

export default TableOutput