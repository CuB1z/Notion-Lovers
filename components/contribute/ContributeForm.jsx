import styles from "@styles/components/contribute/ContributeForm.module.css"
import { contribute } from "@utils/actions"

export default function ContributeForm() {
    return (
        <form
            className={styles.form}
            action={contribute}
        >
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
                <input className={styles.input} type="text" id="link" name="link" />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="file">Archivo</label>
                <input className={styles.input} type="file" id="file" name="file" accept=".md, .txt" />
            </div>
            <button className={styles.button} type="submit">Enviar</button>
        </form>
    )
}