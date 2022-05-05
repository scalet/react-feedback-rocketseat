import { useState } from "react";

import bugImgUrl     from '../../assets/bug.svg';
import ideaImgUrl    from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'
import { CloseButton } from "../CloseButton";

export const feedbackTypes = {
  BUG: {
    title: 'Problema', 
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    } 
  },
  IDEA: {
    title: 'Ideia', 
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de um lâmpada'
    } 
  },
  OTHER: {
    title: 'Outro', 
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    } 
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>

        <CloseButton />
      </header>
      { 
        Object.entries(feedbackTypes).map(([key, value]) => {
          return (            
            <div className="flex py-8 gap-2 w-full">
              <button
                key={key}                
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"                
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>
                  {value.title}
                </span>
              </button>
            </div>
          );   
        })
      }
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  );
}