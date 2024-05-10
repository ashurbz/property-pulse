import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/mongoose";

export default async function Home() {
  await connectDB();
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </div>
  );
}
