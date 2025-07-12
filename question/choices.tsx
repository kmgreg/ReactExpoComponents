import { useState } from 'react';
import { urlToHttpOptions } from 'url';

import Choice from './choice';

export default function Choices(config) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const showAnswerAfterPress = (answerId) => {
        setShowAnswer(true);
        setSelectedAnswer(answerId);
    };

    return config.options.map((option) => {
        return (
            <Choice
                text={option.answer}
                key={option.id}
                onPressFunction={() => showAnswerAfterPress(option.id)}
                showAnswer={showAnswer}
                isCorrect={
                    config.answer
                        ? config.answer.correct_options.find((correctOption) => correctOption.id === option.id)
                        : false
                }
                isSelectedAnswer={selectedAnswer === option.id}
            />
        );
    });
}
