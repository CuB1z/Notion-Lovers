import Image from "next/image"
import Layout from "@/layouts/Layout"
import styles from "@styles/pages/about.module.css"
import SocialCard from "@/components/SocialCard"
import { FAVICON, SITE_TITLE } from "@/utils/constants"

export default function About() {
  return (
    <Layout>
      <div className={styles.title}>
        <h1 className={styles.h1}>{SITE_TITLE}</h1>
        <Image className={styles.img} src={FAVICON} alt={SITE_TITLE} width={50} height={50}/>
      </div>
      <hr />
      <h2 className={styles.h2}>¿Qué es esto?</h2>
      <p className={styles.p}>
        {SITE_TITLE} es un sitio web de código abierto que ofrece una colección
        de contenido educativo y recursos que te ayudarán durante tu trayecto
        en la universidad.
      </p>
      <p className={styles.p}>
        Principalmente, estamos enfocados en carreras de informática y
        software debido a que nosotros, los creadores, somos estudiantes de
        este área. Sin embargo, estamos abiertos a colaboraciones y
        sugerencias para expandir el contenido a otras áreas.
      </p>

      <h2 className={styles.h2}>¿Por qué?</h2>
      <p className={styles.p}>
        La idea de crear {SITE_TITLE} surgió de la necesidad de tener un lugar
        donde pudiéramos compartir y acceder a recursos de calidad para nuestras
        carreras. Como estudiantes, sabemos lo difícil que puede ser encontrar
        material educativo de calidad y actualizado, por lo que decidimos crearlo
        nosotros mismos.
      </p>
      <p className={styles.p}>
        Creemos que las plataformas existentes no ofrecen una experiencia
        ideal, puesto que la mayoría de ellas están enfocadas en la
        monetización y no en la educación. Por eso, queremos ofrecer un
        sitio web gratuito y de código abierto que esté hecho por
        estudiantes para estudiantes.
      </p>
      <p className={styles.p}>
        Aunque actualmente no contamos con publicidad ni con ánimo de lucro,
        y tu experiencia en {SITE_TITLE} es nuestra prioridad, estamos abiertos a
        colaboraciones con empresas y negocios que estén interesados en implementar
        sistemas de anuncios que sean beneficiosos para nuestros usuarios y que estén
        alineados con nuestra misión educativa.
      </p>
      <p className={styles.p}>
        Si te gusta lo que hacemos, considera apoyarnos compartiendo nuestro sitio con
        tus amigos y compañeros de clase para que podamos llegar a más estudiantes.
      </p>

      <h2 className={styles.h2}>¿Quiénes somos?</h2>
      <p className={styles.p}>
        Somos un grupo de estudiantes del Grado en Ingeniería Software en la
        Universidad Rey Juan Carlos. Tras nuestros primeros años de carrera,
        decidimos unirnos para crear {SITE_TITLE} y ofrecer nuestros recursos
        y conocimientos a otros estudiantes.
      </p>
      <p className={styles.p}>
        Nos puedes encontrar en nuestras redes sociales y a través de
        nuestro correo electrónico. Estamos abiertos a colaboraciones y
        sugerencias, así que no dudes en contactarnos si tienes alguna idea
        o propuesta.
      </p>
      <div className={styles.team_cards}>
        <SocialCard
          name={"Diego Sánchez"}
          github={"https://github.com/CuB1z"}
          linkedin={"https://www.linkedin.com/in/cub1z/"}
        />
        <SocialCard
          name={"Jaime Portillo"}
          github={"https://github.com/PortiESP"}
          linkedin={"https://www.linkedin.com/in/porti/"}
        />
        <SocialCard
          name={"Daniel Santos"}
          github={"https://github.com/danisntoss"}
          linkedin={"https://www.linkedin.com/in/danisantos15/"}
        />
      </div>
    </Layout>
  )
}