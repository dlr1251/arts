import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import arts from '../data/arts';

export default function Home() {
  
  return (
      <div className=''>
        {arts.map( (art, i) =>{
          return (

            <div key={i} className="p-6 m-2 max-w-xl mx-auto bg-white rounded-xl shadow-lg space-x-4">
              <div className="text-center">          
                {art.numero}
              </div>
              <div>
                <div className="text-xl font-medium text-black">{art.title}</div>
                <p className="text-slate-500 ">{art.content}</p>
              </div>
            </div>    
            )
        })}

    </div>
  )
}
