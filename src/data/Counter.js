let _counter = 1

// This is a simple counter for providing unique ids
export default {
  increment () {
    return 'id-' + String(_counter++)
  }
}
