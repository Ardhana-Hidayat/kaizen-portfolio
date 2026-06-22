// src/components/ui/TechMarquee.jsx
const techs = [
  'React', 'Golang', 'Laravel', 'Python', 'TensorFlow',
  'Kotlin', 'Figma', 'Firebase', 'PostgreSQL', 'Next.js',
  'Flask', 'Jetpack Compose', 'scikit-learn', 'FastAPI',
  'PyTorch', 'Node.js', 'Tailwind CSS', 'TypeScript',
]

// Duplikat untuk seamless loop
const allTechs = [...techs, ...techs]

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-[#2A2A2A] py-5 bg-[#111111]">
      {/* Fade kiri */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #111111, transparent)' }} />
      {/* Fade kanan */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #111111, transparent)' }} />

      <div className="flex animate-marquee">
        {allTechs.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mr-12 shrink-0"
          >
            <span className="text-[#333333] text-lg">✦</span>
            <span className="text-[#888888] text-sm font-medium font-sans whitespace-nowrap tracking-wide">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
