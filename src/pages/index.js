import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <h1>My Story</h1>
        <p>Hello Everyone! My name is Indrajit Singh and I am a Senior Software Engineer and AI Researcher. I love to explore new technologies, learn things and help others learn.</p>
        <p>"I have complete faith in the focus and the energy that drives me to do greater things in life and that's my intention and love towards executing any task. Instead of just applying for a job randomly I keep my faith in creating interest and attention towards the job"</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
   
  </Layout>
)

export default IndexPage
