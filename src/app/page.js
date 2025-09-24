import Image from "next/image";
import Navbar from "./components/Navbar";
import Imagees from "./components/Imagees";
import Scrole from "./components/Scrole";
import Scrole1 from "./components/Scrole1";
import Scrole2 from "./components/Scrole2";
import Photo from "./components/Photo";
import Photo1 from "./components/Photo1";
import Scrole3 from "./components/Scrole3";
import Mobile from "./components/Mobile";
import Mobile1 from "./components/Mobile1";
import Mobile2 from "./components/Mobile2";
import Top from "./components/Top";
import Top1 from "./components/Top1";
import Footar from "./components/Footar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Imagees/>
      <Scrole/>
      <Scrole1/>
      <Scrole2/>
      <Photo/>
      <Photo1/>
      <Scrole3/>
      <Mobile/>
      <Mobile1/>
      <Mobile2/>
      <Top/>
      <Top1/>
      <Footar/>
    </div>
  );
}
