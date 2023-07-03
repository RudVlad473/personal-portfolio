const windowObj = window
const documentObj = document

export function getCurrentScrollPercentage() {
  const scrollTop = windowObj.scrollY || documentObj.documentElement.scrollTop
  const windowHeight =
    documentObj.documentElement.scrollHeight - documentObj.documentElement.clientHeight
  const currentScrollPercentage = (scrollTop / windowHeight) * 100

  return currentScrollPercentage
}
