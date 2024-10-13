import { section } from "framer-motion/client";
import Card from "../ChooseInterest/Card";
import Footer from "../Footer/Footer";
import Hero from "../Hero";
import RelatedInterest from "./RelatedInterest";
import ToolsTwo from "./ToolTwo";

const companyLinks = ["About Us", "Contact us", "Partner program", "Career"];
const pricingLinks = ["About Us", "Contact us", "Partner program", "Career"];
function ContainerTools (){
    return (
      <section>
        <div className="px-32">
          <Hero />
          <div>
            <ToolsTwo />
            <Card />
            <RelatedInterest/>
          </div>
        </div>
        <Footer companyLinks={companyLinks} pricingLinks={pricingLinks} />
      </section>
    );
}

export default ContainerTools