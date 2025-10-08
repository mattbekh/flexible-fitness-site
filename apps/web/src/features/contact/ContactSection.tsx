"use client";

import {
  ContactRoot,
  ContactCard,
  Heading,
  Subheading,
  Body,
  Row,
  PrimaryLink,
  SecondaryLink,
} from "./contact.tw";

export default function ContactSection() {
  return (
    <ContactRoot data-section-id="contact" aria-label="contact">
      <ContactCard>
        <Heading>Get in touch</Heading>
        <Subheading>Have a question or want to start coaching?</Subheading>

        <Row>
          <PrimaryLink href="mailto:gabrieljamesbaron@gmail.com">Email me</PrimaryLink>
          <SecondaryLink href="tel:+16044465821">Call / Text</SecondaryLink>
        </Row>

        {/* You can add address or social handles later */}
        {/* <Body className="mt-6 opacity-80">Vancouver, BC · @yourhandle</Body> */}
      </ContactCard>
    </ContactRoot>
  );
}
