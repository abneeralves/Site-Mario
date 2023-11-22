import React, {useEffect, useState} from "react";
import './ConteudoPrincipal.css'
import logoMovie from '../../assets/logo-movie.png'
import logoMario from '../../assets/mario-and-luigi.png'

const ConteudoPrincipal = () => {

    const [displayTexto, setDisplayTexto] = useState('')
    const texto = "Um dia, Mario e Luigi vão para no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo rei dos Koopas, Bowser, que vai fazer de tudo para conseguir reinar todos os lugares. E então quando Luigi é raptado por Bowser e o usa para procurar Mario, o único capaz de deter o Koopa e reestabelecer a paz."

    useEffect (() => {
        const textoArray = texto.split('')
        let currentTexto = ''
        let index = 0

        const intervaloID = setInterval(() => {
            currentTexto += textoArray[index]
            setDisplayTexto(currentTexto)
            index++

            if (index === textoArray.length) {
                clearInterval(intervaloID)
            }
        }, 20)

        return () => clearInterval(intervaloID)
    }, [])

    
    
    return (
        <main>
            <div>
                <img id="LogoMovie" src={logoMovie} alt="Logo do filme" />
                <p> <span>{displayTexto}</span></p>
                <button className="Btrailer"><a href="https://www.youtube.com/watch?v=cDNkh5WybZo">Assistir o Trailer</a></button>
                <button className="Bingressos"><a href="https://www.ingresso.com/filme/super-mario-bros">Comprar ingressos</a></button>
            </div>

            <div className="logoDireita">
                <img id="LogoMarioLuigi" src={logoMario} alt="Foto do Mario e Luigi" />

            </div>
        </main>
    )
}

export default ConteudoPrincipal