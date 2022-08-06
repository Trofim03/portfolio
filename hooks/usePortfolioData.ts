import { useState } from "react"

export const usePortfolioData = () => {
  const [currentElem, setCurrentElem] = useState(0)

  return {
    currentElem
  }
}