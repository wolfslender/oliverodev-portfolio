import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Alexis Olivero - Frontend Developer & Web Specialist'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Decorative element */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
            }}
          >
            AO
          </div>

          <h1
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              marginBottom: '20px',
              marginTop: 0,
              background: 'linear-gradient(to right, #ffffff, #94a3b8)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Alexis Olivero
          </h1>
          
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 'normal',
              color: '#94a3b8',
              marginTop: 0,
              marginBottom: '40px',
            }}
          >
            Frontend Developer & Web Specialist
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <div style={{ padding: '10px 20px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '20px', fontSize: '24px' }}>React</div>
            <div style={{ padding: '10px 20px', background: 'rgba(6, 182, 212, 0.2)', color: '#22d3ee', borderRadius: '20px', fontSize: '24px' }}>Next.js</div>
            <div style={{ padding: '10px 20px', background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', borderRadius: '20px', fontSize: '24px' }}>Webflow</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
