/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return <Button onClick={onClick}>
    <Icon size='32px' />{likes} likes!
  </Button>
}
