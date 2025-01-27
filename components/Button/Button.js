const Button = ({
  name,
  border,
  hoverBorder,
  color,
  hoverColor,
  bgColor,
  hoverBgColor,
}) => {
  return (
    <button
      className={`py-1.5 px-4 rounded-lg ${color} ${bgColor} border ${border} hover:${hoverBorder} hover:${hoverBgColor} hover:${hoverColor} hover:scale-95 transition-all duration-300 ease-in-out`}
    >
      {name}
    </button>
  )
}

export default Button
