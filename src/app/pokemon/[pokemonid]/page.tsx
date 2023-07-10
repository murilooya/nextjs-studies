import style from '@/styles/Pokemon.module.css'
import Image from 'next/image'

interface PageProps {
    params: {
        pokemonid: number
    }
}

async function getPokemonInfo(pokemonid: number) {
    const api : string = 'https://pokeapi.co/api/v2/pokemon'
    
    const res = await fetch(`${api}/${pokemonid}`)

    const data = await res.json()

    return data;
}

export default async function Pokemon ( { params } : PageProps) {

    const pokemon = await getPokemonInfo( params.pokemonid )

    return (
        <div className={style.pokemon_container}>
            <h1 className={style.pokemon_title}>{pokemon.name}</h1>
            <Image src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`} width={200} height={200} alt={pokemon.name} />
            <div>
                <h3>Número</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={style.types_container}>
                    {pokemon.types.map( (item : any, index : number) => (
                        <span key={index} className={`${style.type} ${style['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={style.data_container}>
                <div className={style.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={style.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}