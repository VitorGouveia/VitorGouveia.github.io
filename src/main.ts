const tabs = document.querySelectorAll<HTMLButtonElement>('[data-target]')
const tabContents = document.querySelectorAll<HTMLDivElement>("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if(!tab.dataset.target) return

    const target = document.querySelector<HTMLDivElement>(tab.dataset.target)

    if(!target) return

    tabContents.forEach(tc => tc.classList.remove("filters__active"))

    target.classList.add("filters__active")

    tabs.forEach(t => t.classList.remove("filter-tab-active"))

    tab.classList.add("filter-tab-active")
  })
})

const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2500,
  delay: 0
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, { delay: 100 })
sr.reveal(`.profile__profession`, { delay: 200 })
sr.reveal(`.profile__social`, { delay: 300 })
sr.reveal(`.profile__info-group`, { interval: 100, delay: 400 })
sr.reveal(`.profile__buttons`, { delay: 500 })
sr.reveal(`.filters__content`, { delay: 600 })
sr.reveal(`.filters`, { delay: 700 })