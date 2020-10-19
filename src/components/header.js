import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledNav = styled.nav`
  padding: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`
const StyledLink = styled.a`
  padding: 0 2.5rem;
  text-transform: uppercase;
`
const StyledContact = styled.a`
  text-transform: uppercase;
  padding: 1rem 2rem;
`

export default function Header() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo-cn.png" }) {
        sharp: childImageSharp {
          fluid(quality: 99) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [isScrolled, setScrolled] = useState(false)

  useScrollPosition(({ currPos }) => {
    currPos.y < -650 ? setScrolled(true) : setScrolled(false)
  })

  return (
    <StyledHeader className={`header${isScrolled ? "-bg" : ""}`}>
      <Container>
        <a href="#inicio" className={`logo${isScrolled ? "-scrolled" : ""}`}>
          <Img fluid={image.sharp.fluid} alt="C&amp;N Logo" />
        </a>
        <StyledNav>
          <StyledLink href="#servicios">Servicios</StyledLink>
          <StyledContact href="#contacto" className="button">
            Contáctanos
          </StyledContact>
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
