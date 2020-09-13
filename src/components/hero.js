import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const HeroBg = styled(BackgroundImage)`
  margin-top: -16.4rem;
  height: 70vh;
  background-position: cover;
  background-repeat: no-repeat;
  p {
    font-size: 2.4rem;
  }
`
const HeroText = styled.div`
  color: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledLink = styled(Link)`
  margin-top: 4rem;
  padding: 1rem 4rem;
  text-transform: uppercase;
`

export default function Hero () {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-hero.png" }) {
        sharp: childImageSharp {
          fluid(quality: 99) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  return (
    <HeroBg tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <HeroText>
        <h1>Soluciones Audiovisuales</h1>
        <p>Producción y distribución de contenidos</p>
        <StyledLink to="#servicios" className="button">Servicios</StyledLink>
      </HeroText>
    </HeroBg>
  )
}
