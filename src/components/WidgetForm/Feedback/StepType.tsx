import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface StepTypeProps {
  onStepTypeChanged: (type: FeedbackType) => void;
}

export function StepType ({ onStepTypeChanged } : StepTypeProps) {
  return (
    <>
      <header>
        <span className="text-cl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => onStepTypeChanged(key as FeedbackType)}
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}