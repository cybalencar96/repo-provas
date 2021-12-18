interface SubjectWIthExams {
    id: number;
    name: string;
    period: number;
    exams: object[];
}

interface Subject {
    name: string;
    period: number;
}

export {
    Subject,
    SubjectWIthExams
}