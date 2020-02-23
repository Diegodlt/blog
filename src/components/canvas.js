import React, { useEffect } from 'react'

const Canvas = () => {

    const canvasRef = React.useRef(null)

    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        console.log(window.innerWidth)
        context.moveTo(0, 100)
        context.lineTo(700 ,window.innerHeight - 200)
        context.stroke()
        context.moveTo(600, window.innerHeight)
        context.lineTo(1000, 500)
        context.stroke()
        context.moveTo(1700, 0)
        context.lineTo(1400, 500)
        context.stroke()
    })

    return(
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        style={style}
        ref={canvasRef}
      >

      </canvas>
    )
}

const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1
}

export default Canvas
