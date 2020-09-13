import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  z-index: 999;
  width: 10rem;
`
const StyledNav = styled.nav`
  padding: 1rem;
  z-index: 999;
  @media (max-width: 768px) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  padding: 0 2.5rem;
  text-transform: uppercase;
`;
const StyledContact = styled(Link)`
  text-transform: uppercase;
  padding: 1rem 2rem;
`;

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
  `);

  return (
    <header>
      <Container>
        <Logo to="/">
          <Img fluid={image.sharp.fluid} alt="C&amp;N Logo" />
        </Logo>
        <StyledNav>
          {/* <StyledLink to="#nosotros">Nosotros</StyledLink> */}
          <StyledLink to="#servicios">Servicios</StyledLink>
          <StyledContact to="#contacto" className="button">
            Contáctanos
          </StyledContact>
        </StyledNav>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

