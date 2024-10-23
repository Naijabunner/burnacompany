import Card from "../ChooseInterest/Card";
import Hero from "../Hero";
import RelatedInterest from "./RelatedInterest";
import ToolsTwo from "./ToolTwo";

function ContainerTools (){
    return (
      <section>
        <div className="px-32">
          <Hero
            title="Fuziondot Keyword Research"
            inside="keyword research "
            description="Boost your traffic and conquer the SERPs with Semrush’s SEO"
          />
          <div>
            <ToolsTwo />
            <Card />
            <RelatedInterest />
          </div>
        </div>
      </section>
    );
}

export default ContainerTools