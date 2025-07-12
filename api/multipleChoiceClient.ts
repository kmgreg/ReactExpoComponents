import { getNextQuestion, getAnswer, questionSchema, answerSchema } from './mcqs';

export class QuestionConnection {
    maxQuestions: number;
    questionList: questionSchema[];
    answerList: answerSchema[];
    updateFunction: Function;

    constructor(maxQuestions = 10, updateFunction: Function) {
        this.maxQuestions = maxQuestions;
        this.questionList = [];
        this.answerList = [];
        this.updateFunction = updateFunction;
    }

    getQuestionList() {
        return this.questionList;
    }
    getAnswerList() {
        return this.answerList;
    }
    async connect() {
        for (let i = 0; i < this.maxQuestions; i++) {
            const nextQuestionResponse = await getNextQuestion();
            const nextQuestionJson = await nextQuestionResponse.json();
            const nextAnswerResponse = await getAnswer(nextQuestionJson.id);
            const nextAnswerJson = await nextAnswerResponse.json();
            this.questionList.push(nextQuestionJson);
            this.answerList.push(nextAnswerJson);
            this.updateFunction(this.questionList, this.answerList);
        }
    }
    disconnect() {}
}
