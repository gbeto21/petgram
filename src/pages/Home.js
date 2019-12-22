/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}