import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(id => <PhotoCard key={id} />)}
    </ul>
  )
}
