import { motion } from "framer-motion"

const Button = ({ buttonName }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-1.5 px-6 text-sm md:text-base rounded-lg bg-white text-primary hover:text-white hover:border-secondary hover:bg-secondary"
    >
      {buttonName}
    </motion.button>
  )
}

export default Button
