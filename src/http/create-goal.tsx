interface CreateGoalRequest {
  title: string
  desiredWeeklyfrequency: number
}

export async function CreateGoalRequest({
  title,
  desiredWeeklyfrequency,
}: CreateGoalRequest) {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyfrequency,
    }),
  })
}
