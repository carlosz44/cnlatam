import React, { useState } from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Servicio = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    div {
      width: 40%;
      margin: auto 0;
      padding: 0 2rem;
      h3 {
        margin-bottom: 3.2rem;
      }
      p {
        color: #292929;
        line-height: 3.2rem;
      }
    }
    figure {
      width: 40%;
    }
  }
`
const StyledImg = styled.img`
  padding: 0 5rem;
`

const Services = () => {
  const query = useStaticQuery(graphql`
    query {
      tiImage: file(relativePath: { eq: "ti-sistemas-servicios.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      seguridadImage: file(relativePath: { eq: "seguridad-ti-servicios.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      broadcastImage: file(relativePath: { eq: "broadcast-servicios.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [scroll, setScroll] = useState(0)

  useScrollPosition(({ currPos }) => {
    // console.log(currPos)
    // console.log(scroll)
    const scrolled = 100 * ((currPos.y + 790) / -2900)

    if (scrolled > 0 && scrolled <= 100) {
      setScroll(scrolled)
    } else {
      scrolled < 0 ? setScroll(0) : setScroll(100)
    }
  })

  return (
    <section id="servicios">
      <div className="title-deco"></div>
      <h2 className="title-head">Nuestros Servicios</h2>
      <div className="service-container">
        <div className="progress-container">
          <div className="progress" style={{ height: `${scroll}%` }} />
        </div>
        <Servicio>
          <figure>
            <StyledImg
              src={query.tiImage.childImageSharp.fluid.src}
              srcSet={query.tiImage.childImageSharp.fluid.srcSet}
              alt="TI & Sistemas"
            />
          </figure>
          <div>
            <h3>Estudio de TV</h3>
            <p>
              Contamos con un amplio catálogo de estudios de televisión,
              implementados para satisfacer diferentes necesidades.
            </p>
          </div>
        </Servicio>
        <Servicio className="service-mobile">
          <div>
            <h3>Unidad móvil y ENG </h3>
            <p>
              Cobertura de noticias, conferencias, conciertos o eventos
              deportivos con unidades moviles, dentro y fuera del territorio
              nacional.
            </p>
          </div>
          <figure>
            <StyledImg
              src={query.seguridadImage.childImageSharp.fluid.src}
              srcSet={query.seguridadImage.childImageSharp.fluid.srcSet}
              alt="Seguridad TI"
            />
          </figure>
        </Servicio>
        <Servicio>
          <figure>
            <StyledImg
              src={query.broadcastImage.childImageSharp.fluid.src}
              srcSet={query.broadcastImage.childImageSharp.fluid.srcSet}
              alt="Broadcast"
            />
          </figure>
          <div>
            <h3>Telepuerto</h3>
            <p>
              Brindamos servicios de recepción y trasmisión de contenido
              audiovisual, asi como acceso a internet vía satélite.
            </p>
          </div>
        </Servicio>
        <Servicio className="service-mobile">
          <div>
            <h3>DSNG y flyaway</h3>
            <p>
              Sistemas satelitales de rápido despliegue para la transmisión en
              vivo de noticias y eventos de diverso genero, dentro y fuera del
              territorio nacional.
            </p>
          </div>
          <figure>
            <StyledImg
              src={query.seguridadImage.childImageSharp.fluid.src}
              srcSet={query.seguridadImage.childImageSharp.fluid.srcSet}
              alt="Seguridad TI"
            />
          </figure>
        </Servicio>
        <Servicio>
          <figure>
            <StyledImg
              src={query.broadcastImage.childImageSharp.fluid.src}
              srcSet={query.broadcastImage.childImageSharp.fluid.srcSet}
              alt="Broadcast"
            />
          </figure>
          <div>
            <h3>Streaming</h3>
            <p>
              Sobre internet o plataformas privadas, distribuimos tu contenido
              en vivo para ser visualizado en smartphones, laptops y tablets.
            </p>
          </div>
        </Servicio>
        <Servicio className="service-mobile">
          <div>
            <h3>Plataformas de TV Paga</h3>
            <p>
              {/* prettier-ignore */}
              Soluciones llave en mano para operadores de servicios de tv paga,
              vía redes IP (IPTV), satélite (DTH), fibra óptica (FTTH) o cable
              (HFC).
            </p>
          </div>
          <figure>
            <StyledImg
              src={query.seguridadImage.childImageSharp.fluid.src}
              srcSet={query.seguridadImage.childImageSharp.fluid.srcSet}
              alt="Seguridad TI"
            />
          </figure>
        </Servicio>
      </div>
    </section>
  )
}

export default Services
