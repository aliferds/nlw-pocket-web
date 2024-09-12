export type TPendingGoals = {
  id: string
  title: string
  desiredWeeklyfrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<TPendingGoals> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
