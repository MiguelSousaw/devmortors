import { HomeProps } from "@/utils/home.type"
import style from "./style.module.scss"
import {Mail, Map, Phone, Clock} from 'lucide-react'

export function Footer({object}: HomeProps){
    return(
        <footer id="contatos" className={style.footer}>
            <section className={style.section}>
                <h2 className={style.title}>Contatos</h2>
                
                <article className={style.content}>
                    <div className={style.item}>
                        <Mail size={28} color="#ffff"/>
                        <div>
                            <strong>Email</strong>
                            <p>{object.metadata.contact.email}</p>
                        </div>
                    </div>
                        
                    <div className={style.item}>
                        <Phone size={28} color="#ffff"/>
                        <div>
                            <strong>Phone</strong>
                            <p>{object.metadata.contact.phone}</p>
                        </div>
                    </div>

                    <div className={style.item}>
                        <Map size={28} color="#ffff"/>
                        <div>
                            <strong>Adress</strong>
                            <p>{object.metadata.contact.adress}</p>
                        </div>
                    </div>

                    <div className={style.item}>
                        <Clock size={28} color="#ffff"/>
                        <div>
                            <strong>Time</strong>
                            <p>{object.metadata.contact.time}</p>
                        </div>
                    </div>
                </article>
            </section>

            <a href={object.metadata.cta_button.url} target="_blank" className={style.link}>
                <Phone size={24} color="#ffff"/>
                {object.metadata.cta_button.title}
            </a>

            <p className={style.copytext}>Todos direitos reservados {object.title} @{`${new Date().getFullYear()}`}</p>
        </footer>
    )
}