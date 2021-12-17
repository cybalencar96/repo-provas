class ExamError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ExamError';
    }
}

export default ExamError;