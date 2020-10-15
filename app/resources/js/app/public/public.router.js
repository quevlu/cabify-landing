const HomeComponent = () => import("./home/home.component");
const VideoComponent = () => import("./video/video.component");
const ProspectComponent = () => import("./prospect/prospect.component");

export default [
  {
    path: "/",
    name: "Home",
    component: HomeComponent
  },
  {
    path: "/video",
    name: "Video",
    component: VideoComponent
  },
  {
    path: "/prospects",
    name: "Prospect",
    component: ProspectComponent
  }
];
