import * as React from 'react';

type AnswerContextType = {
    value: string;
    onChange: (value: string) => void;
}

export const answerContext = React.createContext<AnswerContextType>({
    value: '',
    onChange: () => {}
});
