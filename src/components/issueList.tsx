import { Issue } from '@/types/issue'
import IssueCard from '@/components/issueCard'

type IssueListProps = {
    issues: Issue[];
    onStatusChange: (issueId: Issue['id'], status: Issue['status']) => void;
}

export default function IssueList({issues, onStatusChange}: IssueListProps) {
    return (
        <span>
            <h2>Issues:</h2>
            <section>
            
                    {issues.map(issue => (
                        <IssueCard key={issue.id} issue={issue} onStatusChange={onStatusChange}/>
                    ))}

            </section>
        </span>
    )
}
