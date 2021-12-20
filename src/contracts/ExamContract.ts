interface IExamController {
    teacher: string;
    subject: string;
    category: string;
    name: string;
}

interface IExamService {
    id: number,
	name: string,
    category: string,
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
    file: {
		id: number,
		name: string,
		url: string,
		size: number,
		key: string
	},
}

export {
    IExamController,
    IExamService,
}