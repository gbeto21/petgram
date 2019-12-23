/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-fragments */
import React from "react"
import { ListOfCategories } from "../components/ListOfCategories"
import { ListOfPhotoCards } from "../container/ListOfPhotoCards"
import { Helmet } from "react-helmet"
import { Layout } from "../components/Layout"

const HomePage = ({ id }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos."
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
