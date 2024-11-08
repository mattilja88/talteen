// pages--> App.js

import { MenuProvider } from '../context/MenuContext'; 

export default function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}
