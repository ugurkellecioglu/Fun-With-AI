import { Steps } from "intro.js-react"
import "intro.js/introjs.css"
import { useEffect, useState } from "react"

const Intro = () => {
  const [firstTime, setfirstTime] = useState(false)

  useEffect(() => {
    // get firstTime local storage
    const firstTime = localStorage.getItem("firstTime")
    if (firstTime === null) {
      localStorage.setItem("firstTime", "true")
      setfirstTime(true)
    } else {
      setfirstTime(false)
      localStorage.setItem("firstTime", "false")
    }
  }, [])

  const steps = [
    {
      element: ".selector1",
      intro: "How to use the app",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".textarea",
      intro: "You can enter your own prompt",
    },
    {
      element: ".submit-btn",
      intro: "Click to search",
    },
    {
      element: ".responses-title",
      intro: "You will see the results here",
    },
    {
      element: ".engines",
      intro:
        "You can choose the engines. You will get different results most of the time",
    },
    {
      element: ".preset",
      intro:
        "You can choose the presets. You can use them and ask relative questions",
    },
  ]
  return (
    <Steps
      enabled={firstTime}
      steps={steps}
      initialStep={0}
      onExit={() => {}}
    />
  )
}

export default Intro
