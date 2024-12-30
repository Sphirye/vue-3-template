import {MultipleItem, SingleItem} from "@/handlers/interfaces/ContentUI"
import LogDisplayError from "@/config/errors/LogDisplayError"
import LoadingUI from "@/handlers/interfaces/LoadingUI"
import Response from "@/models/responses/Response"

export default class Handler {

    static async sampleRequest<T>(state: LoadingUI, service: () => Promise<Response<T>>) {
        return await this._request(state, service)
    }

    static async getItem<T>(
        state: LoadingUI,
        content: SingleItem<T>,
        service: () => Promise<Response<T>>,
    ) {
        if (!("item" in content)) { throw new LogDisplayError(LogDisplayError.PROPERTY_DOES_NOT_EXISTS_IN_CONTENT) }

        const response =  await this._request(state, service) as Response<T>
        content.item = response.result
    }

    static async getItems<T>(
        state: LoadingUI,
        content: MultipleItem<T>,
        service: () => Promise<Response<T[]>>,
    ) {
        if (!("items" in content)) {
            throw new LogDisplayError(LogDisplayError.PROPERTY_DOES_NOT_EXISTS_IN_CONTENT)
        }

        const response = await this._request(state, service) as Response<T[]>
        content.items.splice(0, content.items.length)
        content.items.push(...response?.result)

        if ("totalItems" in content) {
            content.totalItems = response.xTotalCount
        }
    }

    static async _request<T>(
        state: LoadingUI,
        service: () => Promise<Response<T | T[]>>
    ) {
        try {
            this._prepareState(state)
            return await service()
        } catch(e) {
            console.log(e)
        } finally {
            this._finishState(state)
        }
    }

    private static async _prepareState<T>(state: LoadingUI) {
        state.loading = true
        if ("progress" in state) { state.progress = true }
    }

    private static _finishState<T>(state: LoadingUI) {
        state.loading = false
        if ("progress" in state) { state.progress = false }
    }

}