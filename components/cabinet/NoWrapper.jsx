import Link from "next/link"
import no from "./NoWrapper.module.scss"

export default function NoWrapper({title, body}) {

    return (
        <div className={no.wrapper}>
            <img className={no.wrapper__img} src="/img/design/net_zakazov.png" alt="" />
            <h2 className={no.wrapper__title}>{title}</h2>
            <p className={no.wrapper__body}>{body}</p>
            <Link className={no.wrapper__link} href="/order">Сделать заказ</Link>
        </div>
    )
}