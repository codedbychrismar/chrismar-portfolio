export function smoothScrollToId(targetId: `#${string}` | string) {
  const target = document.querySelector(targetId)

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
