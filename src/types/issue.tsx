export type IssueStatus =
    | "open"
    | "in-progress"
    | "done"

export type Issue = {
    id: number
    title: string
    status: IssueStatus
}