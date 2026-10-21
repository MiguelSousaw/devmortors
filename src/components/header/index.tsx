'use client';
import {useState, useEffect} from "react";
import styles from "./styles.module.scss";
import Link from 'next/link';

export function Header(){
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true) //Se o usuário rolar a página mais de 10 pixels, a variável top será false, caso contrário, será true. Isso é usado para alterar a aparência do cabeçalho com base na posição de rolagem.
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler) //Esse componente é montado toda vez que a página é carregada, e o evento de scroll é adicionado ao window. Sempre que o usuário rolar a página, a função scrollHandler será chamada, e você verá "fez scroll" no console.

        return () => {
            window.removeEventListener("scroll", scrollHandler) //Quando o componente é desmontado, o evento de scroll é removido do window. Isso é importante para evitar vazamentos de memória e comportamentos inesperados.
        }
    }, [top])

    return(
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>

            <div className={styles.container}>

                <div className={styles.content}>

                    <div className={styles.logo}>
                        <Link href="/">
                            DevMotors
                        </Link>
                    </div>
                    <nav>
                        <Link href="/">HOME</Link>
                        <Link href="/#servicos">SERVIÇOS</Link>
                        <Link href="/#contatos">CONTATO</Link>
                    </nav>

                </div>

            </div>

        </header>
    )
}

//Utilizar # no link indica que a navagação irá ocorrer na mesma página, e não em outra página. Por exemplo, se você tiver uma seção com o id "servicos" na mesma página, ao clicar no link "SERVIÇOS", a página irá rolar para essa seção específica. Atrvés das ancoras no ID de cada seção.