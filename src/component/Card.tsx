import Image from "next/image"
import Link from "next/link"
import style from '@/styles/Card.module.css'

export default function Card( { pokemon } : any ) {

    return (
        <div className={style.card}>
            <Image src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`} width={120} height={120} alt={pokemon.name} />
            <p className={style.id}>#{pokemon.id}</p>
            <h3 className={style.title}>{pokemon.name}</h3>
            <Link className={style.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}