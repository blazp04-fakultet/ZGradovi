import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue'
import GithubIcon from '@/assets/icons/GithubIcon.vue'

export const socialIcon = (socialName: string) => {
  switch (socialName) {
    case 'LinkedIn':
      return LinkedInIcon

    case 'Github':
      return GithubIcon
  }
}
