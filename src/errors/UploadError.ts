class UploadError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UploadError';
    }
}

export default UploadError;