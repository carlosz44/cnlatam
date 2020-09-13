import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Footer from "../components/footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero />
    <Services />
    <Footer />
  </Layout>
)

export default IndexPage
