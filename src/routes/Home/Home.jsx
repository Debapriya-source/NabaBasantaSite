// Css
import '../../assets/css/bootstrap.min.css' // import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/slick.css' // import 'slick-carousel/slick/slick.css'
import '../../assets/css/magnific-popup.css' // import 'magnific-popup/dist/magnific-popup.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/flaticon.css'
import '../../assets/css/default.css'
import '../../assets/scss/style.scss'

import Footer from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import About from './About'
import Banner from './Banner'
import Cta from './Cta'
import { DiscoverUs } from './DiscoverUs'
import RoomType from './RoomType'

export const Home = () => (
  <>
    <Header />
    <Banner />
    <RoomType />
    <Cta />
    <About />
    <DiscoverUs />
    <Footer />
  </>
)
