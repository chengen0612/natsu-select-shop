import bodystyle from "./modules/bodystyle.js"

export default function () {
  const openFilterBtn = document.getElementById('openFilterBtn')
  const categoryModal = document.getElementById('filterModal')
  const closeFilterBtn = document.getElementById('closeFilterBtn')

  const toggleModal = () => {
    categoryModal.classList.toggle('visible')
  }

  const executor = () => {
    toggleModal()
    bodystyle.execute(changeBodyStyle, true)
  }

  const changeBodyStyle = bodystyle.initHandler()

  openFilterBtn.addEventListener('click', executor)
  closeFilterBtn.addEventListener('click', executor)
}