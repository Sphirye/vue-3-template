import RefreshableUI from "@/handlers/interfaces/RefreshableUI"

export interface ContentUI<T> extends RefreshableUI {
    content: SingleItem<T> | MultipleItem<T>
}
export interface SingleItem<T> {
    item: T
}
export interface MultipleItem<T> {
    items: T[]
    totalItems?: number
}