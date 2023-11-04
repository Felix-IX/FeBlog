//import hopeTheme
import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        logo: 'docs/.vuepress/Public/Images/Apple-560-560.png',
        text: 'Home',
        link: '/README.md',
      },
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
    ],
  }),
};
