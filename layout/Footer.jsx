import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {

    return (
        <div>
            <footer className={styles.footer}>
                <a
                    className=""
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>
                        MoveReady
                    </span>
                    <Image src="/favicon-32x32.png" alt="MR Logo" width={20} height={20} />
                </a>
            </footer>
        </div>
    )
}
