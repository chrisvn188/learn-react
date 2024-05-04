// eslint-disable-next-line react/prop-types
export default function Button({ children, variant, icon }) {
  let style = ''

  switch (variant) {
    case 'contained':
      style = 'px-4 py-2 bg-blue-600 text-slate-50'
      break
    case 'outlined':
      style = 'px-4 py-2 bg-transparent border-2 border-slate-950'
      break
    case 'text':
      style = 'p-2 bg-transparent'
      break
  }

  return (
    <button className={`rounded-md capitalize ${style}`}>
      {icon + ' ' + children}
    </button>
  )
}
