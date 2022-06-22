const addButton = document.querySelector('#add-button')
const item = document.querySelector('#box1-item')

addButton.addEventListener('click', _ => {
  fetch('/boxes/1', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item: item
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload
    })
})