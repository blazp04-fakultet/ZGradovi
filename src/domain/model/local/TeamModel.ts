import type { SocialNetworkModel } from './SocialNetworkModel'

export type TeamModel = {
  imageUrl: string
  firstName: string
  lastName: string
  positions: string[]
  socialNetworks: SocialNetworkModel[]
}
