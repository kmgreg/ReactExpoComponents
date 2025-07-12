export function getNextQuestion() {
    return fetch('https://cross-platform.rp.devfactory.com/for_you');
}

export function getAnswer(questionId: string) {
    return fetch(`https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`);
}

export type userSchema = {
    name: string;
    avatar: string;
};

export type optionSchema = {
    id: string;
    answer: string;
};

export type questionSchema = {
    type: string;
    id: number;
    playlist: string;
    description: string;
    image: string;
    question: string;
    options: optionSchema[];
    user: userSchema;
};

export type answerSchema = {
    id: number;
    correct_options: [{ id: string; answer: string }];
};
