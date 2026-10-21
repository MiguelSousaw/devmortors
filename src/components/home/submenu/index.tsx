'use client';
import Link from 'next/link'
import styles from './styles.module.scss'
import { X, Menu } from 'lucide-react'
import {useState, useEffect} from "react";

export function Submenu(){
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768){
                setIsOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []); //Controla o tamanho da tela a partir do momento que o componente é montado para certificar que o menu configurado pelo botao não fique aberto quando a tela for maior que 768px, e o menu não seja mais necessário.

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return(
        <section className={styles.submenu}>
            <div className={styles.menu} onClick={toggleMenu}>
                <Menu size={34}  color="#121212"/>
                serviços
            </div>
            <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
                {
                    isOpen && (
                        <button onClick={toggleMenu} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
                            <X size={34} color="#121212"/>
                        </button>
                    )
                }

                <li>
                    <Link href="/post/pagina1">Página 1</Link>
                </li>
                <li>
                    <Link href="/post/pagina2">Página 2</Link>
                </li>
                <li>
                    <Link href="/post/pagina3">Página 3</Link>
                </li>
            </ul>
        </section>
    )
}