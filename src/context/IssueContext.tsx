import { createContext, useContext, useState } from 'react'
import { Issue } from '@/types/issue'

type IssueContextType = {
    issues: Issue[]
    addIssue: (title: string) => void
    updateIssueStatus: (issueId: Issue['id'], status: Issue['status']) => void
}
const IssueContext = createContext<IssueContextType | null>(null)

export default function useIssueContext() {
}