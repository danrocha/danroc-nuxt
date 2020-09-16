import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }: any) => {
  app.AOS = new (AOS.init as any)({ disable: 'phone' }) // eslint-disable-line new-cap
}
