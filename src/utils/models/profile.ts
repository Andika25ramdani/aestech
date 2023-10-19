import { Branch } from "./branch"
import { SocialMedia } from "./social"

export type Profile = {
  id: Number
  fullname: String
  gender: 'L' | 'P'
  date_of_birth: Date
  position: String
  avatar: String
  branch: Branch
  social_media: SocialMedia[]
}