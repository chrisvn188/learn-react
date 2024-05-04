import { useRef, useState } from 'react'

export default function VideoPlayer() {
  const videoRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Player</h1>
      <video
        ref={videoRef}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        onPlay={() => {
          setIsPlaying(true)
        }}
        onPause={() => {
          setIsPlaying(false)
        }}
      />
      <div className="flex justify-between">
        <button
          className="text-orange-500 font-semibold"
          onClick={() => {
            videoRef.current.pause()
          }}>
          Pause
        </button>
        <div>{isPlaying ? 'Play' : 'Pause'}</div>
        <button
          className="text-indigo-500 font-semibold"
          onClick={() => {
            videoRef.current.play()
          }}>
          Play
        </button>
      </div>
    </div>
  )
}
