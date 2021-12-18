interface IExamController {
    teacher: string;
    subject: string;
    category: string;
    name: string;
    linkPdf: string;
}

interface IExamService {
    id: number,
	name: string,
    category: string,
    linkPdf: string,
    class: {
        id: number,
        subject: {
            id: number,
            name: string,
            period: number,
        },
        teacher: {
            id: number,
            name: string,
        }
    }
}

export {
    IExamController,
    IExamService,
}