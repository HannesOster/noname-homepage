import Header from '@/components/Header/Header';
import Navigation from '@/components/Header/Navigation/Navigation';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return ( <> <Header/>
  <Navigation/>
  <Component {...pageProps} /></>)
  

}
