import { createContext, useContext, useState } from 'react'
import { Issue } from '@/types/issue'


type IssueContextType = {
    issues: Issue[]
    addIssue: (title: string) => void
    updateIssueStatus: (issueId: Issue['id'], status: Issue['status']) => void
}

const IssueContext = createContext<IssueContextType | null>(null)

export function IssueProvider({ children }: { children: React.ReactNode }) {
    const [issues, setIssues] = useState<Issue[]>([
        {id: 1, title: "Login funktioniert nicht", status: "open" },
        {id: 2, title: "Dark Mode fehlt", status: "in-progress" },
        {id: 3, title: "Footer verschwindet", status: "done" }
    ])

    const addIssue = (title: string) => {
        setIssues(prev => {
            const newIssue: Issue = {id: prev.length + 1, title, status: "open"}
            if (prev.some(issue => issue.id === newIssue.id)) return prev
            return [...prev, newIssue]
        })
    }

    const updateIssueStatus = (issueId: Issue['id'], status: Issue['status']) => {
        setIssues(prev => prev.map(issue => issue.id === issueId ? { ...issue, status } : issue))
    }

    return (
        <IssueContext.Provider value={{ issues, addIssue, updateIssueStatus }}>
            {children}
        </IssueContext.Provider>
    )
}

export function useIssueContext() {
    const context = useContext(IssueContext)

    if (!context) {
        throw new Error('useIssueContext must be used within an IssueProvider')
    }

    return context
}