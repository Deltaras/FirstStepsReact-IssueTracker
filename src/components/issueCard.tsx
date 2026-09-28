import {Issue, IssueStatus} from '@/types/issue'

type IssueCardProps = {
    issue: Issue;
    onStatusChange: (issueId: Issue['id'], status: Issue['status']) => void;
}

const issueStatuses: IssueStatus[] = ['open', 'in-progress', 'done']

export default function IssueCard({ issue, onStatusChange }: IssueCardProps) {
    return (
        <article>
            <input type="text" value={issue.title} onChange={(e) => onStatusChange(issue.id, e.target.value as IssueStatus)} />
            <p>Status: </p>
            <select value={issue.status} onChange={(e) => onStatusChange(issue.id, e.target.value as IssueStatus)}>
                {issueStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                ))}
            </select>
        </article>
    )
}