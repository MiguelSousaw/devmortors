import style from './style.module.scss'
import { HomeProps } from '@/utils/home.type'
import Image from 'next/image'

export function Services({object}: HomeProps){
    return(
        <>
        <section className={style.containerAbout} id='servicos'>
            <article className={style.innerAbout}>
                <h1 className={style.title}>Sobre</h1>
                <p className={style.texto}>{object.metadata.about.description}</p>
            </article>
            <div className={style.bannerAbout}>
                <Image className={style.imageAbout} alt='Imagem ilustrativa sobre a empresa' quality={100} fill={true} src={object.metadata.about.banner.url}/>
            </div>
        </section>
        
        <h2 className={style.servicesTitle}>Conheça nossos serviços</h2>
        <section className={style.services}>
           {object.metadata.services.map((service, index) => (
             <article key={index} className={style.service}>
                <div className={style.innerService}>
                    <Image className={style.imageService} alt={`Imagem ${index} de serviços`} quality={100} fill={true} src={service.image.url}/>
                </div>
                <p>{service.description}</p>
             </article>
           ))}
        </section>
        </>
    )
}