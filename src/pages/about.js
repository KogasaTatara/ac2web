import Foot from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/sobremim";

function about() {
    return (
        <main>
            <Navbar />
            <img src='https://img.amiami.com/images/product/main/222/GOODS-04230781.jpg'></img>
            <AboutMe />
            <Foot />
        </main>
    )
}
export default about