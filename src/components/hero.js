import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const HeroBg = styled(BackgroundImage)`
  height: 80rem;
  background-position: cover;
  background-repeat: no-repeat;
`
const HeroText = styled.div`
  color: #fafafa;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
  }
  p {
    font-size: 2.4rem;
    text-align: center;
  }
`
const StyledLink = styled.a`
  margin-top: 4rem;
  padding: 1rem 4rem;
  text-transform: uppercase;
`

export default function Hero() {
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
    <HeroBg id="inicio" tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <HeroText>
        <h1>Soluciones Audiovisuales</h1>
        <p>Producción y distribución de contenidos</p>
        <StyledLink href="#servicios" className="button">
          Servicios
        </StyledLink>
      </HeroText>
    </HeroBg>
  )
}
