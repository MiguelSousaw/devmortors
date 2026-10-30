import { HomeProps } from "@/utils/home.type"
import style from "./style.module.scss"

export function Footer({object}: HomeProps){
    return(
        <footer id="contatos" className={style.footer}>
            <h1>Teste</h1>
        </footer>
    )
}