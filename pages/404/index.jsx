import Link from "next/link";
import fourOffour from "./404.module.scss"

export default function FourOhFour() {

    return (
        <div className={fourOffour.wrapper}>
            <img className={fourOffour.wrapper__img} src="img/design/404.png" alt="" />
            <h2 className={fourOffour.wrapper__title}>Страница не найдена</h2>
            <p className={fourOffour.wrapper__body}>Возможно она была удалена или набран неверный адрес. Перейдите на нашу главную страницу.</p>
            <Link className={fourOffour.wrapper__link} href="/">На главную</Link>
        </div>
    )
}