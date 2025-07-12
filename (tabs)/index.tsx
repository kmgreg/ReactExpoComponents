import { useEffect, useState } from 'react';

import { questionSchema, answerSchema } from '../api/mcqs';
import { QuestionConnection } from '../api/multipleChoiceClient';
import Slides from '../slide/slides';

export default function Tab() {
    const [questionList, setQuestionList] = useState<questionSchema[]>([]);
    const [answerList, setAnswerList] = useState<answerSchema[]>([]);

    const updateLists = (newQuestionList: questionSchema[], newAnswerList: answerSchema[]) => {
        setQuestionList([...newQuestionList]);
        setAnswerList([...newAnswerList]);
    };

    useEffect(() => {
        const questionConnection = new QuestionConnection(10, updateLists);
        questionConnection.connect();
        return questionConnection.disconnect;
    }, []);

    return (
        <Slides
            slideList={questionList.map((question, index) => {
                return { question, answer: answerList[index] };
            })}
        />
    );
}
