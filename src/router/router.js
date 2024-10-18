import HomePage from "../pages/HomePage/HomePage";
import LoaMarshall from "../pages/LoaMarshall/LoaMarshall";
import LoaDiDong from "../pages/LoaMarshall/LoaDiDong";
import IndoorSpeaker from "../pages/LoaMarshall/IndoorSpeaker";
import LimitedEdition from "../pages/LoaMarshall/LimitedEdition";
import AccessoryPage from "../pages/AccessoryPage/AccessoryPage";
import EarPage from "../pages/EarPage/EarPage";
const routes = [
  {
    path: '/',
    page: HomePage
  },
  {
    path: '/loaMarshall',
    page: LoaMarshall,
  },
  {
    path: '/loaDiDong',
    page: LoaDiDong,
  },
  {
    path: '/indoorSpeaker',
    page: IndoorSpeaker,
  },
  {
    path: '/limitedEdition',
    page: LimitedEdition,
  },
  {
    path: '/accessoryPage',
    page: AccessoryPage,
  },
  {
    path: '/earPage',
    page: EarPage,
  }
];

export default routes;
