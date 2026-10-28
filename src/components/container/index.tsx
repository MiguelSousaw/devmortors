import style from './style.module.scss'
import {ReactNode} from 'react'
export function Container({children}: {children: ReactNode}){
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}