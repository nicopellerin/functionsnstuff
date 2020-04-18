import * as React from "react"
import styled from "styled-components"

import CardList from "../../../components/card-list"
import PageHeader from "../../../components/page-header"
import Layout from "../../../components/layout"
import Breadcrumb from "../../../components/breadcrumb"

const TutorialsReact = () => {
  return (
    <>
      <PageHeader tech="react" />
      <Layout>
        <Breadcrumb />
        <Spacer />
        <CardList tech="react" />
        <Spacer />
      </Layout>
    </>
  )
}

export default TutorialsReact

// Styles
const Spacer = styled.div`
  margin-bottom: 4rem;
`
