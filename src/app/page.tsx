import VideoBackground from "./components/video-background";
import Navigation from "./components/navigation";
import Icons from "./components/icons";
import Carousel from "./components/caroussel";
import Footer from "./components/footer";
import Numbers from "./components/numbers";
import Discount from "./components/discount";

export default function Home() {
  return (
    <>
      <Navigation />
      <header className="bg-gradient-to-t from-blue-500 to-blue-900 min-h-screen">
        <VideoBackground />
      </header>
      <main className="pb-10">
        <div className="container mx-auto"><Carousel /></div>
        <Discount />
        <div className="container mx-auto"><Icons /></div>
        <Numbers />
        <Footer />
      </main>
    </>
  );
}
