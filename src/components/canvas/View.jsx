'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import { useControls } from 'leva'
const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
