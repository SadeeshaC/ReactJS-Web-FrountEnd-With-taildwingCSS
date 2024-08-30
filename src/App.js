import SlideImage from "./mainimage";
import Navigator from "./navbar";
import ImageSlide from "./activesliderimage";
import CenterText from "./text";
import Macupbox from "./box1";
import BoxTwo from "./box2";
import BoxThree from "./box3";
function App() {
  return (
    <>
      <Navigator />
      <SlideImage />
      <CenterText />
      <ImageSlide />
      <Macupbox />
      <BoxTwo/>
      <BoxThree/>
    </>
  );
}

export default App;
