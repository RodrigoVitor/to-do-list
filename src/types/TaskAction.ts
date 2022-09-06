export type TaskAction = {
    type: string,
    payload?: {
        id?: string,
        value?: string
    }
}