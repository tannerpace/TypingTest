import "./App.css"
import React, { useState, useEffect } from "react"
import Timer from "./components/Timer"
import SimpleTimer from "./components/Timer/SimpleTimer"

function App() {
  const [wordCount, setWordCount] = useState("0")
  const [value, setValue] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [seconds, setSeconds] = useState(60)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue((oldValue) => value)
  }

  const handleStart = () => {
    setIsStarted((isStarted) => !isStarted)
  }
  const handleStop = () => {
    if (isStarted) {
      handleSubmit()
    }
    setIsStarted((isStarted) => !isStarted)
  }
  const handleSubmit = () => {
    if (value === "") {
      return
    }
    setWordCount(value.match(/(\w+)/g).length)
  }
  const eraseText = () => {
    document.getElementById("test").value = ""
    setValue("")
  }
  const handleReset = () => {
    setSeconds(60)

    setWordCount(0)
    eraseText()
  }

  const ResetButton = () => {
    return (
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    )
  }

  const StartButton = () => {
    return <button onClick={handleStart}>Start</button>
  }
  const StopButton = () => {
    return (
      <button className="stopButton" onClick={handleStop}>
        Stop
      </button>
    )
  }

  const PlaceHoldersButton = () => {
    return <button className="placeHolder">Im a placeholder</button>
  }

  return (
    <div className="App">
      {!isStarted ? <h1>Typing Test</h1> : <h1>Start Typing!</h1>}
      <SimpleTimer
        seconds={`${seconds}`}
        isStarted={isStarted}
        stopTimer={(x) => setIsStarted(x)}
        timerSubmit={() => handleSubmit()}
        setTimeRemaining={(x) => setSeconds(x)}
      />

      {!isStarted ? <StartButton /> : <StopButton />}
      {!isStarted ? <ResetButton /> : <PlaceHoldersButton />}

      <textarea id="test" onChange={handleChange} disabled={!isStarted} />

      <h2>Word Count : {wordCount}</h2>
    </div>
  )
}

export default App
