const viewportWidth = document.body.clientWidth || 0

// window.onresize = () => {
//   viewportWidth = document.body.clientWidth
// }

function log(msg, label) {
  if (label) {
    console.log(`------------ ${label} = '${msg}' ------------`)
  } else {
    console.log(`------------ '${msg}' ------------`)
  }
}

export { log, viewportWidth }
