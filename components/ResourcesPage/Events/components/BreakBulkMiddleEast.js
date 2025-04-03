"use client"

import { useEffect, useRef } from "react"

const BreakBulkMiddleEast = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play()
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.3 } // 30% of the video should be visible to play
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <div className="pb-8 md:py-14">
      <div className="flex flex-col px-3 md:px-0">
        <div
          className="max-w-screen-lg mx-auto relative mt-7 mb-14"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 -z-10 bg-primary blur opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 -z-20 bg-secondary blur-2xl opacity-50 rounded-lg"></div>

          <video
            ref={videoRef}
            className="w-full h-auto relative rounded-lg"
            autoPlay
            loop
            playsInline
            controls
            muted
          >
            <source
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/Nautilus-Website/nautilus-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="bg-primary px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-screen-lg w-full mx-auto shadow-xl rounded-lg">
          <div className="flex flex-col gap-4 sm:gap-5 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight tracking-wide">
              BreakBulk Middle East 2025
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-light leading-tight tracking-wide">
              Two days of insightful discussions, impactful connections, and a
              shared vision for collaborative growth - BreakBulk Middle East
              2025!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreakBulkMiddleEast
