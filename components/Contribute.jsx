import styles from "@styles/components/Contribute.module.css"

export default function Contribute() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>🤝 ¿Cómo contribuir?</h1>
            <section className={styles.info}>
                <p className={styles.p}>Agradecemos las contribuciones de todos. Aquí te explicamos cómo puedes contribuir con tus apuntes:</p>
                <ol className={styles.list}>
                    <li className={styles.list_item}>📝 <strong>Notion</strong>: Comparte el enlace público de tu página de Notion. Asegúrate de que la página esté configurada para acceso público para que otros puedan verla.</li>
                    <li className={styles.list_item}>📄 <strong>Texto plano o Markdown</strong>: Puedes enviar tus apuntes en formato de texto plano o Markdown. Asegúrate de estructurar bien tus apuntes para que otros puedan entenderlos fácilmente.</li>
                </ol>
                <p className={styles.p}>Para contribuir, por favor envíanos tus apuntes a través de nuestro formulario de envío en la plataforma. 💌 ¡Agradecemos tu contribución para hacer los recursos académicos más accesibles para todos! 🎓🌍</p>
            </section>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Nombre</label>
                    <input className={styles.input} type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">Título</label>
                    <input className={styles.input} type="text" id="title" name="title" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="link">Enlace</label>
                    <input className={styles.input} type="url" id="link" name="link" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="file">Archivo</label>
                    <input className={styles.input} type="file" id="file" name="file" required />
                </div>
                <button className={styles.button} type="submit">Enviar</button>
            </form>

        </div>
    )
}