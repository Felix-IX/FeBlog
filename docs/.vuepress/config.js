//导入defaultTheme
import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    logo: 'docs/.vuepress/Public/Images/Apple.png',
    navbar: [
      // NavbarItem

      // NavbarGroup
      {
        text: 'About',
        children: [
          {
            text: 'FelixAB',
            link: '/about/FelixAB.md',
          }
        ],
      },
      {
        text: 'Home',
        link: '/README.md',
      },
    ],
    logo: '/Images/Apple.png',
  }),
}