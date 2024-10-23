import Card from "../ChooseInterest/Card";
import Hero from "../Hero";
import RelatedInterest from "./RelatedInterest";
import ToolsTwo from "./ToolTwo";

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
      </section>
    );
}

export default ContainerTools