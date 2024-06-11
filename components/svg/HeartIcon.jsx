import styles from "@styles/components/svg/HeartIcon.module.css"

export default function HeartIcon({ size = 15 }) {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className={styles.heart_icon}
            width={`${size}px`} height={`${size}px`} viewBox="0 0 15 15" style={{ enableBackground: 'new 0 0 15 15' }} xmlSpace="preserve">
            <path className={styles.path} d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75
                    C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z" fill="#000"/>
        </svg>
    )
}