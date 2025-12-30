'use client'

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith('https://') || src.startsWith('http://')) return src
  return `${src}?width=${width}&quality=${quality || 75}`
}
