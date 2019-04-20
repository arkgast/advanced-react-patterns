// build a basic toggle component

import React, {useState} from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import {Switch} from '../switch'

function Toggle({onToggle}) {
  // 🐨 this toggle component is going to need to have state for `on`

  // 🐨 make a `toggle` function here which will:
  // 1. toggle the `on` state
  // 2. call `onToggle` with the new `on` state.
  // 💰 `const newOn = !on`
  const [on, toggleOn] = useState(false)

  const handleClick = () => {
    const newOn = !on
    toggleOn(newOn)
    onToggle(newOn)
  }

  // 🐨 render the Switch here and pass `on` and `onClick`
  return <Switch on={on} onClick={handleClick} />
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Toggle onToggle={(...args) => console.info('onToggle', ...args)} />
}
Usage.title = 'Build Toggle'

export default Usage
