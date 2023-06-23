// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [
    ['abood', { backgroundImage : 'url("./public/images/banner-01.png")'}],
    ['list' , {marginRight : '24px' , fontSize : '14px' , fontWeight : '500'}],
  // 
  ],
  //     ['list' , {'marginRight' : '24px' , 'fontSize' : '14px' , 'fontWeight' : '500' ,cursor : 'pointer', 'textAlign' : 'center',}],
  theme: {
    colors  : {
      primary : '#7453fc',
      light: '#282b2f',
      bocolor : '#404245',
      dark :'#37393c',
      lighten : '#afafaf'
    },
  }
})
