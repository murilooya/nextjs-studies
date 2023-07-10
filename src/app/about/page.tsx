import style from '@/styles/About.module.css'
import Image from 'next/image'

export default function About () {
    return (
        <div className={style.about}>
            <h1>About</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel blanditiis delectus, animi assumenda dolores ipsa natus veniam, quaerat soluta voluptas doloremque magnam aliquid? Eos, autem quas eius animi dicta sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum, quam soluta commodi officiis consequuntur eos et esse delectus ratione fugit dolores, distinctio rem. Totam vel esse deleniti accusantium illo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quisquam sint dolore voluptatem consequatur tenetur sit excepturi cum quod quas, nam animi possimus cupiditate ipsum suscipit! Enim sed quaerat odio.</p>
            <Image src={'/images/charizard.png'} height={300} width={300} alt='Charizard' />
        </div>
    )
}