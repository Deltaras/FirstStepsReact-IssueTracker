"use client"

import IssueHeader from '@/components/issueHeader'
import IssueStats from '@/components/issueStats'
import IssueList from '@/components/issueList'
import {Issue} from '@/types/issue'
import {useState} from 'react'

type IssueStats = {
  open: number;
  inProgress: number;
  done: number;
}

export default function Home() {

  function getIssueStats(issues: Issue[]): IssueStats {
    const open = issues.filter(i => i.status === "open").length
    const inProgress = issues.filter(i => i.status === "in-progress").length
    const done = issues.filter(i => i.status === "done").length

    return { open, inProgress, done }
  }
    const [issues, setIssues] = useState<Issue[]>([
    {id: 1, title: "Login funktioniert nicht", status: "open" },
    {id: 2, title: "Dark Mode fehlt", status: "in-progress" },
    {id: 3, title: "Footer verschwindet", status: "done" }
  ])

  function addIssue() {
    setIssues(prev => {
      const newIssue: Issue = {id: 4, title: "Neues Problem", status: "open"}
      if (prev.some(issue => issue.id === newIssue.id)) return prev

      return [...prev, newIssue]
    })
  }
  
  function updateIssueStatus(issueId: Issue['id'], status: Issue['status']) {
    setIssues(prev => {
      return prev.map(issue => {
        if (issue.id === issueId) {
          return { ...issue, status }
        }
        return issue
      })
    })
  }

  return (
    <main>
      <IssueHeader />

      <IssueStats {...getIssueStats(issues)} />
      
      <button onClick={addIssue}>Add Issue</button>
      <IssueList issues={issues} onStatusChange={updateIssueStatus}/>
    </main>
  )
}