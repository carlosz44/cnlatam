import React from "react"
import Form from "./form"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import { Envelope } from "@emotion-icons/zondicons"

const FooterBg = styled(BackgroundImage)`
  background-position: cover;
  background-repeat: no-repeat;
  padding-top: 10rem;
  h2 {
    color: #fafafa;
  }
  p {
    font-size: 2.4rem;
    color: #fafafa;
  }
`
const FooterWrapper = styled.div`
  margin: 0 auto;
  padding: 0 5rem;
  padding-bottom: 12rem;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`
const FooterCol = styled.div`
  padding: 0 2rem;
  text-align: center;
  ul li svg {
    width: 1.8rem;
    margin-right: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`

const Footer = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-footer.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer id="contacto">
      <FooterBg tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div className="footer-deco"></div>
        <h2 className="title-head">Contáctanos</h2>
        <FooterWrapper>
          <FooterCol>
            <ul>
              <li>
                <Envelope />
                contacto@cnlatam.net
              </li>
            </ul>
            <Form />
          </FooterCol>
        </FooterWrapper>
        <div style={{ textAlign: "center" }}>
          <a
            href="http://carlosamoros.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fafafa" }}
          >
            © {new Date().getFullYear()}
            {` `}
          </a>
        </div>
      </FooterBg>
    </footer>
  )
}

export default Footer
