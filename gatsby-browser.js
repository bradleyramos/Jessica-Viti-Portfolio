export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `I've added some new updates! ` +
      `Reload to see what's new?`
  )

  if (answer === true) {
    window.location.reload()
  }
}