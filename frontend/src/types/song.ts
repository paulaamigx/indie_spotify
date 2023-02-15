import {StaticImageData} from 'next/image'

export interface ISong{
  id: string,
  title: string,
  liked: boolean,
  albumId: string
}

export interface IAlbum{
  id: string,
  title: string,
  artist: string,
  cover: StaticImageData,
}
