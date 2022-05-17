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
                        
                        [1,2,3,4,5].map( (x, i) => {
                            return (
                                    <tr key={i}>
                                        <td>{`today`} </td>
                                        <td>{props.capitalCredito} </td>
                                        <td>{props.fechaVencimiento}</td>
                                        <td>{props.fechaLiquidacion}</td>
                                        <td>1961</td>
                                        <td>1961</td>
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