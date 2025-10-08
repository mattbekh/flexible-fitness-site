"use client";
import {
  CatchRoot,
  Phrase,
  Subphrase,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
} from "./catchPhrase.tw";

export default function CatchPhraseSection() {
  return (
    <CatchRoot>
      <Phrase>{`Move Better.\nFeel Stronger.\nStay Flexible.`}</Phrase>

      <Subphrase>
        Personalized coaching that fits your lifestyle — online or in person.
      </Subphrase>

      <ButtonRow>
        <PrimaryButton
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("nav:go", { detail: { id: "book" } })
            )
          }
        >
          Free&nbsp;Session
        </PrimaryButton>

        <SecondaryButton
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("nav:go", { detail: { id: "about" } })
            )
          }}
        >
          Learn&nbsp;More
        </SecondaryButton>
      </ButtonRow>
    </CatchRoot>
  );
}
