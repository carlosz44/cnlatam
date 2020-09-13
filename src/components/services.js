import React from 'react';
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

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
    }
    figure {
      width: 40%;
    }
  }
`
const StyledImg = styled.img`
  padding: 0 5rem;
`;

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
  console.log(query)
  return (
    <section>
      <div className="title-deco"></div>
      <h2 className="title-head">Nuestros Servicios</h2>
      <Servicio>
        <figure>
          <StyledImg
            src={query.tiImage.childImageSharp.fluid.src}
            srcSet={query.tiImage.childImageSharp.fluid.srcSet}
            alt="TI & Sistemas"
          />
        </figure>
        <div>
          <h3>TI & Sistemas</h3>
          <p>
            Consolidamos soluciones a la medida y necesidad de nuestros clientes
            optimizando sus servicios en sus entornos consolidados donde se
            mejora la alta disponibilidad de servicio para asegurar los SLA
            comprometidos.
          </p>
        </div>
      </Servicio>
      <Servicio className="service-mobile">
        <div>
          <h3>Seguridad TI</h3>
          <p>
            Ponemos a su disposición múltiples herramientas de seguridad y
            ciberseguridad para ayudar a asegurar la confidencialidad,
            integridad o disponibilidad de los datos de su organización,
            asegurando protección de amenazas internas y externas.
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
          <h3>Broadcast</h3>
          <p>
            Años de experiencia en la transmisión de señales audiovisuales y de
            radiodifusión garantizan la calidad de nuestros servicios para la
            cobertura de acontecimientos de trascendencia y todo tipo de
            noticias.
          </p>
        </div>
      </Servicio>
    </section>
  )
}

export default Services;
