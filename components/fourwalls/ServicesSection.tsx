import type { ReactNode } from "react";
import { ConstructionIcon, GridIcon, HouseIcon, KeyIcon, WrenchIcon } from "./icons";
import MotionReveal from "./MotionReveal";
import { Button, BodyText, Container, SectionHeading, SectionTag } from "./shared";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  icon: ReactNode;
};

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Interior Design for Homes and Commercial Spaces",
    description:
      "We create customized interior designs that blend style, comfort, and functionality for residential and commercial spaces.",
    color: "#c8a856",
    iconBg: "bg-[#c8a8561f]",
    icon: <HouseIcon />
  },
  {
    number: "02",
    title: "Construction Services",
    description:
      "Complete construction solutions from planning to execution with a focus on quality and durability.",
    color: "#c8a856",
    iconBg: "bg-[#c8a8561f]",
    icon: <ConstructionIcon />
  },
  {
    number: "03",
    title: "Modular Kitchen and Wardrobe Solutions",
    description:
      "Modern kitchens, wardrobes, and storage solutions designed for efficient and stylish living.",
    color: "#c8a856",
    iconBg: "bg-[#c8a8561f]",
    icon: <GridIcon />
  },
  {
    number: "04",
    title: "Renovation & Remodeling",
    description: "Upgrade your existing space with renovation services that bring a fresh and modern look.",
    color: "#c8a856",
    iconBg: "bg-[#c8a8561f]",
    icon: <WrenchIcon />
  },
  {
    number: "05",
    title: "Turnkey Project Execution",
    description: "From concept to completion, we handle everything to deliver a hassle free experience.",
    color: "#c8a856",
    iconBg: "bg-[#c8a8561f]",
    icon: <KeyIcon />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#1a2e20] py-10 md:py-24">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <MotionReveal>
              <SectionTag>What We Do</SectionTag>
            </MotionReveal>
            <MotionReveal delayMs={100}>
              <SectionHeading light className="mb-2">
                Our <em className="text-[#c8a856]">Expertise</em>
              </SectionHeading>
            </MotionReveal>
            <MotionReveal delayMs={180}>
              <BodyText light>End-to-end design and construction solutions tailored for every need.</BodyText>
            </MotionReveal>
          </div>
          <MotionReveal delayMs={260}>
            <Button href="#contact" variant="ghostLight" className="whitespace-nowrap px-6 py-[0.7rem] text-[0.8rem]">
              Get Free Consultation
            </Button>
          </MotionReveal>
        </div>

        <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-[14px] border border-[#c8a8561a] bg-[#c8a8561a] sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <MotionReveal
              key={service.number}
              delayMs={index * 90}
              className="cinematic-panel relative overflow-hidden bg-[#142218] px-7 py-10 transition-colors duration-300"
            >
              <div
                className="mb-6 font-(family-name:--font-outfit) text-[2.4rem] font-bold leading-none opacity-10 transition-opacity duration-300"
                style={{ color: service.color }}
              >
                {service.number}
              </div>
              <div className={`mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[6px] ${service.iconBg}`}>
                {service.icon}
              </div>
              <h3 className="mb-3 font-(family-name:--font-outfit) text-[1.08rem] font-bold leading-[1.3] text-white">
                {service.title}
              </h3>
              <p className="text-[0.8rem] font-light leading-[1.72] text-white/35">{service.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-[3px]" style={{ backgroundColor: service.color }} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
