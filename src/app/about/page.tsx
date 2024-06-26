import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Trusted Online Tutor Platform in academic excellence",
  description: "We provide high-quality, accessible education to students across Ethiopia. We are dedicated to nurturing the academic growth and personal development of each student by offering tailored tutoring services that meet their individual needs. We believe that every student has the potential to succeed, and we are committed to helping them achieve their goals.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At MNS Tutor, our mission is to provide high-quality, accessible education to students across Ethiopia. We are dedicated to nurturing the academic growth and personal development of each student by offering tailored tutoring services that meet their individual needs. We believe that every student has the potential to succeed, and we are committed to helping them achieve their goals."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
