//import hopeTheme
import { defineUserConfig } from "vuepress";
import { hopeTheme } from 'vuepress-theme-hope'

export default {
  theme: hopeTheme({
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
  }),
};
