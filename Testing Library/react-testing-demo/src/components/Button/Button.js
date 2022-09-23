import React, { useState } from 'react'

const Button = () => {
    const [showAnotherButton, setShowAnotherButton] = useState(false)
    
  return (
    <div>
        <button data-testid="button"
            onClick={() => {
                setShowAnotherButton(true);
            }}>
            CLICK HERE
        </button>
        {showAnotherButton && (
            <button data-testid="button">CLICK HEREE</button>
        )}
    </div>
  )
}

export default Button