import { FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export function FeedbackContentStep ({ feedbackType }: FeedbackContentStepProps) {
  return (
    <>
        <header>
          <span className="text-xl leading-6"></span>

          <CloseButton />
        </header>
        <p>Estou no Content Step</p>
    </>
  )
}