import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImg from "@/Assets/shared/FAQ/v4-m1/_faq/v4-m1/& FAQ/& Image.png";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="flex flex-wrap  max-w-[1560px] mx-auto my-11">
      <Image
        src={faqImg}
        alt="Faq"
        width={500}
        height={300}
        className="object-contain sm:mx-auto"
      />

      <div className="mx-auto">
        <h1 className="font-extrabold text-2xl">Frequently Asked Questions</h1>
        <Accordion
          type="single"
          collapsible
          className=" flex flex-col gap-2 my-9"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="font-[1000] text-[2rem] text-[#9D96A8]">01</h1>
              What is SEO, and why is it important for my business?
            </AccordionTrigger>
            <AccordionContent>
              SEO (Search Engine Optimization) is the process of optimizing your
              website to rank higher on search engine results pages (SERPs),
              which increases your visibility to potential customers. SEO is
              crucial because it drives organic traffic to your site, builds
              credibility, and can significant.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="font-[1000] text-[2rem] text-[#9D96A8]">02</h1>
              How long does it take to see results from SEO efforts?
            </AccordionTrigger>
            <AccordionContent>
              SEO is a long-term strategy. While some improvements, such as
              increased traffic, may be visible in the first few months, it
              usually takes 3 to 6 months to see more significant results, such
              as improved rankings and conversions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="font-[1000] text-[2rem] text-[#9D96A8]">03</h1>
              What is keyword research, and how does it impact SEO?
            </AccordionTrigger>
            <AccordionContent>
              Keyword research involves identifying the words and phrases that
              potential customers use when searching for your products or
              services online. Targeting the right keywords helps ensure your
              content appears in relevant searches, driving qualified traffic to
              your site.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h1 className="font-[1000] text-[2rem] text-[#9D96A8]">04</h1>
              How do you choose the right keywords for my website?
            </AccordionTrigger>
            <AccordionContent>
              We analyze your industry, competitors, and target audience using
              advanced keyword research tools. We focus on finding keywords with
              high search volume, relevance to your business, and manageable
              competition to ensure maximum effectiveness.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
