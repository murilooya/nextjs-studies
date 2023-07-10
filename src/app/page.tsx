import style from '@/styles/Home.module.css'
import Image from 'next/image'
import Card from '@/component/Card'

export interface Pokemon {
  name: string,
  url: string,
  id: number  
}

export async function getPokemon() {
  const maxPokemon : number = 251
  const api : string = "https://pokeapi.co/api/v2/pokemon"
  const res = await fetch(`${api}/?limit=${maxPokemon}`)

  const data = await res.json()
  
  data.results.forEach( (item : any, index : number) => {
    item.id = index + 1     
  });

  return data.results;
}

export default async function Home() {
  const pokemons : Array <Pokemon> = await getPokemon()

  return (
    <>
      <div className={style.title_container}>
        <h1 className={style.title}>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width={50} height={50} alt='Pokeball' />
      </div>
      <div className={style.pokemon_container}>
        {pokemons.map( pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
