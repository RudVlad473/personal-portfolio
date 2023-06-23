export function calculatePagePercentage(): number {
  const viewportHeight = window.innerHeight
  const totalPageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  )

  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const visibleHeight = scrollTop + viewportHeight

  const percentage = (visibleHeight / totalPageHeight) * 100
  return percentage
}
