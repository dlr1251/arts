import React from 'react';
import { format } from 'date-fns';

const TableOutput = (props) => {

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];
    return (
        <div>
            <table className="min-w-full border text-center">
                <thead>
                    <tr>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Inicio Mes</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Fin de mes</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Porcion mes</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Tasa anual</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Tasa mensual</th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r">Intereses</th>
                    </tr>
                </thead>
                <tbody>
                    {                        
                        props.monthsArray.map( (month, i) => {
                            
                            return (
                                    <tr className="border-b" key={i}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{`${month.inicioMes.getDate()}-${meses[month.inicioMes.getMonth()]}-${month.inicioMes.getFullYear()}`} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{`${month.finMes.getDate()}-${meses[month.finMes.getMonth()]}-${month.finMes.getFullYear()}`} </td>                                        
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{month.porcionMes.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{`${month.tasaAnual}%`}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">Tasa mensual</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{`$${(month.porcionMes * month.tasaAnual * props.capitalCredito).toFixed(2)}`}</td>
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