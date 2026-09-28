type IssueStatsProps  = {
    open: number;
    inProgress: number;
    done: number;
};

export default function IssueStats({ open, inProgress, done }: IssueStatsProps ) {
    return (
        <section>
            <div>
                <p>Open issues: {open}</p>
            </div>
            <div>
                <p>In Progress issues: {inProgress}</p>
            </div>
            <div>
                <p>Done issues: {done}</p>
            </div>
        </section>
    )
}