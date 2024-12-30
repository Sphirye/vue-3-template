import Error from "@/config/errors/Error";

export default class LogDisplayError extends Error {

    static readonly PROPERTY_DOES_NOT_EXISTS_IN_COMPONENT = "property does not exist in component"
    static readonly PROPERTY_DOES_NOT_EXISTS_IN_CONTENT = "property does not exist in content"

    display(): void {
        // logger.error(this.message)
    }

}