import styles from "@styles/components/Contribute.module.css"

export default function Contribute() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>🤝 ¿Quieres contribuir?</h1>
            <hr />
            <section className={styles.info}>
                <p className={styles.p}>Agradecemos las contribuciones de todos. Aquí te explicamos cómo puedes contribuir con tus apuntes:</p>

                <div className={styles.title}>
                    <div className={styles.img_container}>
                        <img className={styles.img} src="/assets/notion.svg" alt="Notion" />
                    </div>
                    <h2 className={styles.h2}>Notion</h2>
                </div>
                <ul className={styles.list}>
                    <li className={styles.list_item}>Comparte el enlace público de tu página de Notion.</li>
                    <li className={styles.list_item}>Asegúrate de que la página esté configurada para acceso público para que otros puedan verla.</li>
                </ul>

                <div className={styles.title}>
                    <div className={styles.img_container}>
                        <img className={styles.img} src="/assets/markdown.svg" alt="Markdown" />
                    </div>
                    <h2 className={styles.h2}>Texto Plano / Markdown</h2>
                </div>
                <ul className={styles.list}>
                    <li className={styles.list_item}>Puedes enviar tus apuntes en formato de texto plano o Markdown.</li>
                    <li className={styles.list_item}>Asegúrate de estructurar bien tus apuntes para que otros puedan entenderlos fácilmente.</li>
                </ul>

                <p className={styles.p}>Para contribuir, por favor envíanos tus apuntes a través de nuestro formulario de envío en la plataforma.</p>
                <p className={styles.p}>¡Agradecemos tu contribución para hacer los recursos académicos más accesibles para todos! 🎓🌍</p>
            </section>
            <form className={styles.form} action="/api/contribute" method="post">
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Nombre</label>
                    <input className={styles.input} type="text" id="name" name="name" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Título</label>
                    <input className={styles.input} type="text" id="title" name="title" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="link">Enlace</label>
                    <input className={styles.input} type="url" id="link" name="link" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="file">Archivo</label>
                    <input className={styles.input} type="file" id="file" name="file" />
                </div>
                <button className={styles.button} type="submit">Enviar</button>
            </form>
        </div>
    )
}