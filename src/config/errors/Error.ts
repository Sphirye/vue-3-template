export default abstract class Error {
    protected message!: string

    constructor(message: string) {
        this.message = message
    }

    abstract display(): void
}