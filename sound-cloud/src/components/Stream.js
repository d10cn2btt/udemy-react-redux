import React from 'react'

export default function Stream({tracks = []}) {
  return (
    <div>
      {
        tracks.map((track, key) => (
          <div className="track" key={key}>{track.title}</div>
        ))
      }
    </div>
  )
}
