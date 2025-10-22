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
      <Phrase>{`Train Smart.\nMove Freely.\nLive Fully.`}</Phrase>

      <Subphrase>
        Personalized coaching that fits your lifestyle.
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
