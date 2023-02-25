const rangeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

const handleRangeInput = e => {
  textEl.style.fontSize = e.target.value + 'px';
}

rangeEl.addEventListener('input', handleRangeInput);