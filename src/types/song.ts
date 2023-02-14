import {StaticImageData} from 'next/image'

export interface ISong{
  id: string,
  title: string,
  artist: string,
  cover: StaticImageData,
  liked: boolean
}
