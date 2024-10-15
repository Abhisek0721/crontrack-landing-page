import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Pricing() {
  return (
    <Container>
      <Hero />
      <div id="features"></div>
      <SectionTitle
        preTitle="Crontrack Benefits"
        title=" Why should you use Crontrack"
      >
        Unlike other social media management software, Crontrack is known for its simplicity. 
        It is easy to use due to its user-friendliness. It helps users schedule posts, monitor what matters, 
        and create custom reports to analyze social media performance.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of Crontrack.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />
    </Container>
  );
}
