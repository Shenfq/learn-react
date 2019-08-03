const funcs = [
  a => {
    console.log('a:', a)
    return a
  },
  b => {
    console.log('b:', b)
    return b
  },
  c => {
    console.log('c:', c)
    return c
  }
]

const fn = funcs.reduce((a, b) => (...args) => a(b(...args)))

fn('test')