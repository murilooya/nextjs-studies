import style from "@/styles/Footer.module.css"

export default function Footer () {
    return (
        <footer className={style.footer}>
            <p>
                <span className={style.span}>PokeNext</span> &copy; 2023
            </p>
        </footer>
    )
}