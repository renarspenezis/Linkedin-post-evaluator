import React from 'react';

interface RenarsAvatarProps {
  type: 'bored' | 'unamused' | 'grumpy' | 'tuxedo';
  isPlaying: boolean;
  customImageSrc?: string;
}

export default function RenarsAvatar({ type, isPlaying, customImageSrc }: RenarsAvatarProps) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10 group bg-slate-900">
      {/* Dynamic Soundwave Equalizer overlay if playing */}
      {isPlaying && (
        <div className="absolute top-4 right-4 z-20 flex items-end gap-[3px] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold mr-1.5">LIVE AUDIO</span>
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse [animation-duration:0.6s]"></div>
          <div className="w-1.5 h-5 bg-emerald-400 rounded-full animate-bounce [animation-duration:0.7s]"></div>
          <div className="w-1.5 h-4 bg-emerald-400 rounded-full animate-bounce [animation-duration:0.5s]"></div>
          <div className="w-1.5 h-2.5 bg-emerald-400 rounded-full animate-pulse [animation-duration:0.8s]"></div>
        </div>
      )}

      {/* Portrait Content */}
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definition of Gradients, Shaders, Filters */}
        <defs>
          {/* Avatar 1 Background: Creme curtains theme */}
          <linearGradient id="bgBored" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDE0D4" />
            <stop offset="100%" stopColor="#D5C5B5" />
          </linearGradient>

          {/* Avatar 2 Background: Cloudy nordvision theme */}
          <linearGradient id="bgUnamused" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8E9AAF" />
            <stop offset="100%" stopColor="#CBC0D3" />
          </linearGradient>

          {/* Avatar 3 Background: Angry dramatic red */}
          <linearGradient id="bgGrumpy" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#780000" />
            <stop offset="50%" stopColor="#C1121F" />
            <stop offset="100%" stopColor="#1B0000" />
          </linearGradient>

          {/* Avatar 4 Background: Gatsby gold glow */}
          <linearGradient id="bgTuxedo" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1F1A12" />
            <stop offset="50%" stopColor="#3E3424" />
            <stop offset="100%" stopColor="#14100B" />
          </linearGradient>

          {/* Skin and Stubble Gradients */}
          <linearGradient id="skinGrad" x1="200" y1="100" x2="200" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FAD3B6" />
            <stop offset="100%" stopColor="#E5B191" />
          </linearGradient>
          <linearGradient id="stubbleGrad" x1="200" y1="140" x2="200" y2="225" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9C9590" stopOpacity="0" />
            <stop offset="100%" stopColor="#4A4F56" stopOpacity="0.55" />
          </linearGradient>

          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
          </filter>

          {/* Custom Picture Clpping masks */}
          <clipPath id="photoClipBored">
            <rect x="125" y="75" width="150" height="135" rx="12" />
          </clipPath>
          <clipPath id="photoClipUnamused">
            <rect x="120" y="75" width="160" height="160" rx="80" />
          </clipPath>
          <clipPath id="photoClipGrumpy">
            <rect x="120" y="80" width="160" height="160" rx="20" />
          </clipPath>
          <clipPath id="photoClipTuxedo">
            <circle cx="200" cy="150" r="77" />
          </clipPath>
        </defs>

        {/* =======================================================
            OPTION 1: BORED / COFFEE SIPPER
            ======================================================= */}
        {type === 'bored' && (
          <>
            {/* Background curtains stripes representing the image */}
            <rect width="400" height="300" fill="url(#bgBored)" />
            <g opacity="0.15">
              <rect x="30" width="35" height="300" fill="#A89481" />
              <rect x="110" width="35" height="300" fill="#A89481" />
              <rect x="190" width="35" height="300" fill="#A89481" />
              <rect x="270" width="35" height="300" fill="#A89481" />
              <rect x="350" width="35" height="300" fill="#A89481" />
            </g>

            {/* Coffee Steam Meme Detail */}
            <path d="M70 120 Q80 100 70 90 T70 60" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" strokeDasharray="3 3">
              <animate attributeName="strokeDashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M85 115 Q95 95 85 85 T85 65" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" strokeDasharray="3 3">
              <animate attributeName="strokeDashoffset" values="0;12" dur="2.5s" repeatCount="indefinite" />
            </path>

            {/* Standing Laptop Indicator / Table */}
            <rect y="260" width="400" height="40" fill="#5C4D3C" />
            <path d="M50 260 L120 260 L130 220 L60 220 Z" fill="#E2E8F0" opacity="0.9" /> {/* Latte Cup */}
            <ellipse cx="95" cy="220" rx="35" ry="8" fill="#783F04" />
            <ellipse cx="95" cy="220" rx="28" ry="5" fill="#DBEAFE" opacity="0.5" /> {/* Foam latte heart art */}
            <text x="95" y="242" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DIGITAL LATTE</text>

            {customImageSrc ? (
              // Real photo rendered as a beautiful Polaroid picture sitting on the table
              <g id="real-photo-classic-bored" filter="url(#shadow)">
                {/* Polaroid Border card block */}
                <rect x="115" y="65" width="170" height="175" rx="12" fill="#FFFFFF" />
                {/* actual user image */}
                <image 
                  href={customImageSrc} 
                  x="125" 
                  y="75" 
                  width="150" 
                  height="135" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#photoClipBored)" 
                />
                <text x="200" y="230" fill="#7F5F40" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  ANALYST RENĀRS
                </text>
              </g>
            ) : (
              <g transform="translate(10, 10)">
                {/* Shoulders / Torso - Dark blue T-shirt */}
                <path d="M120 300 Q190 220 270 300" fill="#1C2D42" />
                <path d="M170 240 Q195 255 220 240" fill="#E5B191" /> {/* Neck cutout */}

                {/* Head Base */}
                <rect x="155" y="105" width="80" height="115" rx="40" fill="url(#skinGrad)" filter="url(#shadow)" />

                {/* Hair (Spiky dark brown/black) */}
                <path d="M152 110 C155 75, 235 75, 238 110 C242 90, 215 70, 195 72 C180 70, 155 90, 152 110 Z" fill="#1E1E24" />
                <path d="M170 78 L175 66 L182 72 L188 62 L198 70 L205 60 L212 68 L220 64 L225 74" stroke="#1E1E24" strokeWidth="6" strokeLinecap="round" />

                {/* Beard Stubble */}
                <path d="M155 160 C155 220, 235 220, 235 160 Q235 210, 195 215 Q155 210, 155 160 Z" fill="url(#stubbleGrad)" />

                {/* Bored eyes */}
                {/* Left eye drooping */}
                <ellipse cx="178" cy="142" rx="10" ry="4" fill="#FFFFFF" />
                <ellipse cx="178" cy="142" rx="4" ry="4" fill="#4B5563" />
                <path d="M168 140 Q178 135 188 140" stroke="#874F34" strokeWidth="2.5" /> {/* Eyelid droop */}
                <path d="M166 132 Q178 130 190 135" stroke="#1E1E24" strokeWidth="3" strokeLinecap="round" /> {/* Bored Eyebrows */}

                {/* Right eye drooping */}
                <ellipse cx="212" cy="142" rx="10" ry="4" fill="#FFFFFF" />
                <ellipse cx="212" cy="142" rx="4" ry="4" fill="#4B5563" />
                <path d="M202 140 Q212 135 222 140" stroke="#874F34" strokeWidth="2.5" />
                <path d="M200 135 Q212 130 224 132" stroke="#1E1E24" strokeWidth="3" strokeLinecap="round" />

                {/* Nose */}
                <path d="M190 145 Q195 168 193 168 Q198 168 200 160" stroke="#D39270" strokeWidth="2.5" strokeLinecap="round" />

                {/* Bored/Disappointed Flat Mouth */}
                <path d="M182 188 Q195 188 208 188" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />

                {/* Chin support hand overlay (Bored pose) */}
                <g transform="translate(0, 0)">
                  <path d="M140 250 Q150 205 165 200" stroke="#E5B191" strokeWidth="18" strokeLinecap="round" /> {/* Wrist/Forearm */}
                  {/* Fingers on chin */}
                  <circle cx="160" cy="195" r="7" fill="#E5B191" />
                  <circle cx="168" cy="190" r="7" fill="#E5B191" />
                  <circle cx="176" cy="193" r="6" fill="#E5B191" />
                </g>
              </g>
            )}

            {/* "ZZZ..." animation bubble */}
            <g transform="translate(290, 60)">
              <text x="10" y="30" fill="#52525B" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Z</text>
              <text x="25" y="16" fill="#71717A" fontSize="16" fontWeight="bold" fontFamily="sans-serif" className="animate-bounce">z</text>
              <text x="36" y="6" fill="#A1A1AA" fontSize="12" fontWeight="bold" fontFamily="sans-serif">z</text>
            </g>
          </>
        )}

        {/* =======================================================
            OPTION 2: UNAMUSED / BEANIE
            ======================================================= */}
        {type === 'unamused' && (
          <>
            {/* Background cloudy park setup with cold vibe */}
            <rect width="400" height="300" fill="url(#bgUnamused)" />
            <circle cx="340" cy="50" r="30" fill="#E4E4E7" opacity="0.4" /> {/* Drab sun */}
            <path d="M0 300 Q120 240 240 280 T400 290 L400 300 L0 300 Z" fill="#6B7280" opacity="0.3" /> {/* Distant moody hill */}
            
            {/* Simple streetlamp silhouette from image */}
            <line x1="330" y1="300" x2="330" y2="120" stroke="#4B5563" strokeWidth="3" />
            <polygon points="315,120 345,120 330,105" fill="#374151" />
            <circle cx="330" cy="125" r="7" fill="#FDE047" opacity="0.8" />

            {customImageSrc ? (
              // Real photo customized with the Nordvision Beanie superimposed!
              <g id="real-photo-unamused">
                {/* Photo framed inside a clean circular layout */}
                <circle cx="200" cy="155" r="82" fill="#FFFFFF" filter="url(#shadow)" />
                <image 
                  href={customImageSrc} 
                  x="120" 
                  y="75" 
                  width="160" 
                  height="160" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#photoClipUnamused)" 
                />
                
                {/* Superimposed embroidered Nordvision beanie crowning your photo */}
                <g transform="translate(0, -32)">
                  <path d="M150 115 C150 70, 240 70, 240 115 Z" fill="#18181B" /> {/* Beanie Dome */}
                  <rect x="146" y="98" width="108" height="24" rx="6" fill="#09090B" /> {/* Folded Rim */}
                  <text x="200" y="110" fill="#FFFFFF" fontSize="6.5" fontWeight="900" textAnchor="middle" letterSpacing="0.8" fontFamily="sans-serif">N O R D V I S I O N</text>
                  <path d="M192 82 L196 82 L196 92 L192 92 Z" fill="#FFFFFF" />
                  <path d="M204 82 L208 82 L208 92 L204 92 Z" fill="#F97316" /> {/* Orange right stem */}
                  <path d="M196 82 L204 92 H200 L196 87 Z" fill="#E4E4E7" /> {/* Diagonal */}
                </g>
              </g>
            ) : (
              <g transform="translate(10, 20)">
                {/* Gray coat jacket with details */}
                <path d="M100 300 Q195 210 290 300" fill="#4B5563" />
                <path d="M195 240 L195 300" stroke="#374151" strokeWidth="4" /> {/* Zipper */}
                <circle cx="195" cy="255" r="4" fill="#9CA3AF" /> {/* Zipper pull */}
                
                {/* Cozy blue hoodie collar beneath */}
                <path d="M140 238 Q195 265 250 238" fill="#1E3A8A" />

                {/* Head Base */}
                <rect x="155" y="105" width="80" height="110" rx="40" fill="url(#skinGrad)" filter="url(#shadow)" />

                {/* Beard Stubble */}
                <path d="M155 155 C155 215, 235 215, 235 155 Q235 205, 195 210 Q155 205, 155 155 Z" fill="url(#stubbleGrad)" />

                {/* Nordvision Beanie (Image 2 representation) */}
                <path d="M150 115 C150 70, 240 70, 240 115 Z" fill="#18181B" /> {/* Beanie Dome */}
                <rect x="146" y="98" width="108" height="24" rx="6" fill="#09090B" /> {/* Folded Rim */}
                
                {/* NORDVISION Embroidered Text & Logo */}
                <text x="200" y="110" fill="#FFFFFF" fontSize="6.5" fontWeight="900" textAnchor="middle" letterSpacing="0.8" fontFamily="sans-serif">N O R D V I S I O N</text>
                {/* Big "N" Logo on Beanie (White & Orange) */}
                <path d="M192 82 L196 82 L196 92 L192 92 Z" fill="#FFFFFF" />
                <path d="M204 82 L208 82 L208 92 L204 92 Z" fill="#F97316" /> {/* Orange right stem */}
                <path d="M196 82 L204 92 H200 L196 87 Z" fill="#E4E4E7" /> {/* Diagonal */}

                {/* Unamused Asymmetric Eyes */}
                {/* Left eye: narrow squint */}
                <ellipse cx="178" cy="144" rx="9" ry="2.5" fill="#FFFFFF" />
                <circle cx="178" cy="144" r="2.5" fill="#4B5563" />
                <path d="M167 142 Q178 139 189 142" stroke="#874F34" strokeWidth="2" />
                {/* Sarcastic raised left eyebrow */}
                <path d="M166 131 Q178 126 189 133" stroke="#27272A" strokeWidth="3" strokeLinecap="round" />

                {/* Right eye: suspicious squint */}
                <ellipse cx="212" cy="144" rx="9" ry="3.5" fill="#FFFFFF" />
                <circle cx="212" cy="144" r="3" fill="#4B5563" />
                <path d="M201 142 Q212 139 223 142" stroke="#874F34" strokeWidth="2" />
                {/* Right eyebrow flat / lowered */}
                <path d="M201 135 Q212 133 223 133" stroke="#27272A" strokeWidth="3" strokeLinecap="round" />

                {/* Nose */}
                <path d="M190 148 Q195 170 193 170 Q198 170 200 162" stroke="#D39270" strokeWidth="2.5" strokeLinecap="round" />

                {/* Unamused smirking mouth (crooked half-smile) */}
                <path d="M180 186 Q192 188 206 181" stroke="#3F3F46" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M205 178 Q208 184 204 185" stroke="#3F3F46" strokeWidth="2.5" /> {/* Cheek dimple smirk trigger */}
              </g>
            )}

            {/* Subtext overlay: Skeptic visual indicator */}
            <rect x="20" y="20" width="100" height="24" rx="6" fill="#1F2937" opacity="0.9" />
            <text x="70" y="35" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">TIKTOK ATTENTION</text>
          </>
        )}

        {/* =======================================================
            OPTION 3: GRUMPY CAT SHAME POSTER
            ======================================================= */}
        {type === 'grumpy' && (
          <>
            {/* Background inspired by the real pointing poster 'I WANT YOU FOR PICKLEBALL' */}
            <rect width="400" height="300" fill="url(#bgGrumpy)" />

            {/* Poster style thick elegant gold border internally */}
            <rect x="15" y="15" width="370" height="270" fill="none" stroke="#D97706" strokeWidth="4" />
            <text x="200" y="45" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="sans-serif">I WANT YOU</text>
            <text x="200" y="65" fill="#EF4444" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="1.2" fontFamily="sans-serif">TO READ THE POST!</text>

            {customImageSrc ? (
              // Real photo masked, complete with pointing finger and funny cat ears overhead!
              <g id="real-photo-grumpy" filter="url(#shadow)">
                {/* Photo framed inside safe border */}
                <rect x="116" y="76" width="168" height="168" rx="24" fill="#D97706" />
                <image 
                  href={customImageSrc} 
                  x="120" 
                  y="80" 
                  width="160" 
                  height="160" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#photoClipGrumpy)" 
                />

                {/* Fluffy pink headband ears floating strictly on top of your photo */}
                <g transform="translate(0, -10)">
                  <path d="M152 110 L137 80 L162 95 Z" fill="#78350F" stroke="#3F1A08" strokeWidth="2.5" />
                  <polygon points="147,105 142,87 157,97" fill="#F472B6" />
                  
                  <path d="M232 110 L247 80 L222 95 Z" fill="#78350F" stroke="#3F1A08" strokeWidth="2.5" />
                  <polygon points="237,105 242,87 227,97" fill="#F472B6" />
                </g>

                {/* Pointing Hand coming from the bottom */}
                <g transform="translate(165, 182)">
                  <circle cx="25" cy="40" r="18" fill="#E5B191" stroke="#874F34" strokeWidth="2" />
                  <rect x="18" y="25" width="14" height="25" rx="7" fill="#FAD3B6" stroke="#B45309" strokeWidth="2" />
                  <path d="M16 46 Q25 43 34 46" stroke="#9A3412" strokeWidth="2" />
                  <circle cx="25" cy="18" r="9" fill="#FCA5A5" opacity="0.3" />
                </g>
              </g>
            ) : (
              <g transform="translate(10, 30)">
                {/* Dark navy polo shirt collar */}
                <path d="M110 300 Q195 220 280 300" fill="#1E3A8A" />
                <path d="M194 250 L194 300" stroke="#111827" strokeWidth="3" /> {/* Polo placket */}

                {/* Head Base */}
                <rect x="155" y="105" width="80" height="110" rx="40" fill="url(#skinGrad)" filter="url(#shadow)" />

                {/* Beard Stubble */}
                <path d="M155 155 C155 215, 235 215, 235 155 Q235 205, 195 210 Q155 205, 155 155 Z" fill="url(#stubbleGrad)" />

                {/* Angry angled eyebrows */}
                <path d="M164 135 L188 141" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M226 135 L202 141" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />

                {/* Angry Cat-like large crying/grumpy eyes */}
                <ellipse cx="178" cy="148" rx="10" ry="8" fill="#FEF08A" stroke="#7F1D1D" strokeWidth="2" />
                <ellipse cx="178" cy="148" rx="3.5" ry="7" fill="#000000" /> {/* Vertical pupil */}
                
                <ellipse cx="212" cy="148" rx="10" ry="8" fill="#FEF08A" stroke="#7F1D1D" strokeWidth="2" />
                <ellipse cx="212" cy="148" rx="3.5" ry="7" fill="#000000" />

                {/* Nose - small cute pink cat triangle over mouth */}
                <polygon points="191,158 199,158 195,163" fill="#F472B6" />
                <path d="M195 163 L195 168 Q195 171 191 171" stroke="#000000" strokeWidth="1.5" />
                <path d="M195 163 L195 168 Q195 171 199 171" stroke="#000000" strokeWidth="1.5" />

                {/* Comical fluffy cat ears headband */}
                <path d="M165 110 L150 80 L175 95 Z" fill="#78350F" stroke="#3F1A08" strokeWidth="2.5" /> {/* Left cat ear */}
                <polygon points="160,105 155,87 170,97" fill="#F472B6" /> {/* Inside pink ear */}
                
                <path d="M225 110 L240 80 L215 95 Z" fill="#78350F" stroke="#3F1A08" strokeWidth="2.5" /> {/* Right cat ear */}
                <polygon points="230,105 235,87 220,97" fill="#F472B6" />

                {/* Whisker lines drawn on cheeks */}
                <line x1="145" y1="168" x2="125" y2="164" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="145" y1="174" x2="120" y2="174" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="245" y1="168" x2="265" y2="164" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="245" y1="174" x2="270" y2="174" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />

                {/* Extreme Grumpy Downward U-Turn Mouth */}
                <path d="M176 195 Q195 180 214 195" fill="none" stroke="#991B1B" strokeWidth="4.5" strokeLinecap="round" />

                {/* Accent hair spikes */}
                <path d="M185 106 L195 93 L205 106" stroke="#1E1E24" strokeWidth="4" strokeLinecap="round" />

                {/* DRAMATIC UNCLE SAM ACCORDIAN POINTING HAND OVERLAY */}
                <g transform="translate(170, 195)">
                  {/* Finger pointing directly at screen - scaled foreshortened finger */}
                  <circle cx="25" cy="40" r="18" fill="#E5B191" stroke="#874F34" strokeWidth="2" /> {/* Clenched fist body */}
                  {/* Foreshortened pointing finger */}
                  <rect x="18" y="25" width="14" height="25" rx="7" fill="#FAD3B6" stroke="#B45309" strokeWidth="2" />
                  <path d="M16 46 Q25 43 34 46" stroke="#9A3412" strokeWidth="2" />
                  <circle cx="25" cy="18" r="9" fill="#FCA5A5" opacity="0.3" /> {/* Fingertip reflection targeting YOU */}
                </g>
              </g>
            )}

            {/* Bottom shame ribbon */}
            <rect x="40" y="244" width="320" height="30" rx="8" fill="#111827" stroke="#EF4444" strokeWidth="2" />
            <text x="200" y="264" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace" letterSpacing="3">SHAME ON YOUR CLICK!</text>
          </>
        )}

        {/* =======================================================
            OPTION 4: TUXEDO DI CAPRIO CHAMPAGNE TOAST
            ======================================================= */}
        {type === 'tuxedo' && (
          <>
            {/* Gatsby luxury gold gradient with floating particles */}
            <rect width="400" height="300" fill="url(#bgTuxedo)" />
            
            {/* Magical golden sparkles */}
            <g opacity="0.7">
              {/* Sparkle 1 */}
              <path d="M50 50 L53 60 L63 63 L53 66 L50 76 L47 66 L37 63 L47 60 Z" fill="#FCD34D" />
              {/* Sparkle 2 */}
              <path d="M350 70 L352 77 L359 79 L352 81 L350 88 L348 81 L341 79 L348 77 Z" fill="#FCD34D" />
              {/* Sparkle 3 */}
              <path d="M80 220 L81 225 L86 226 L81 227 L80 232 L79 227 L74 226 L79 225 Z" fill="#FCD34D" />
              {/* Sparkle 4 */}
              <path d="M320 220 L322 228 L330 230 L322 232 L320 240 L318 232 L310 230 L318 228 Z" fill="#FCD34D" />
            </g>
            
            {/* Blurry background lights */}
            <circle cx="100" cy="90" r="15" fill="#FCD34D" opacity="0.15" />
            <circle cx="310" cy="110" r="25" fill="#FCD34D" opacity="0.1" />
            <circle cx="280" cy="60" r="8" fill="#FCD34D" opacity="0.2" />

            {customImageSrc ? (
              // Real photo wearing the pristine formal Tuxedo!
              <g id="real-photo-tuxedo">
                {/* Photo framed inside a luxury golden ring-framed circle */}
                <circle cx="200" cy="150" r="82" fill="none" stroke="#D97706" strokeWidth="4" />
                <image 
                  href={customImageSrc} 
                  x="120" 
                  y="70" 
                  width="160" 
                  height="160" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#photoClipTuxedo)" 
                />

                {/* Superimposed complete bow-tie collar at the bottom base of your circle */}
                <g transform="translate(0, 5)">
                  {/* Collar base */}
                  <polygon points="175,212 225,212 200,232" fill="#FFFFFF" />
                  {/* Black Bowtie */}
                  <polygon points="182,214 198,221 182,228" fill="#1F2937" />
                  <polygon points="218,214 198,221 218,228" fill="#1F2937" />
                  <circle cx="198" cy="221" r="4" fill="#111827" />
                </g>

                {/* Floating Gatsby Champagne cheers held in your actual photo style! */}
                <g transform="translate(245, 130)" className="animate-pulse">
                  <path d="M20 70 L20 100" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" />
                  <ellipse cx="20" cy="100" rx="18" ry="4" fill="#CBD5E1" />
                  <path d="M2 30 C2 30, 2 65, 20 70 C38 65, 38 30, 38 30 Z" fill="#FFFFFF" fillOpacity="0.15" stroke="#F1F5F9" strokeWidth="2" />
                  <path d="M4 42 C4 42, 4 64, 20 68 C36 64, 36 42, 36 42 Z" fill="#F59E0B" fillOpacity="0.8" />
                  <ellipse cx="20" cy="42" rx="16" ry="3" fill="#FCD34D" />
                  
                  <circle cx="12" cy="50" r="1.5" fill="#FFFFFF" />
                  <circle cx="20" cy="58" r="1" fill="#FFFFFF" />
                  <circle cx="28" cy="48" r="2" fill="#FFFFFF" />
                  <circle cx="16" cy="62" r="1" fill="#FFFFFF" />
                  <circle cx="24" cy="52" r="1.5" fill="#FFFFFF" />

                  <path d="M0 58 Q-10 62 -2 70" stroke="#E5B191" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="1" cy="58" r="4.5" fill="#E5B191" />
                  <circle cx="3" cy="64" r="4.5" fill="#E5B191" />
                </g>
              </g>
            ) : (
              <g transform="translate(10, 20)">
                {/* Tuxedo lapels and white shirt */}
                <path d="M100 300 L140 230 L165 240 L195 240 L225 240 L250 230 L290 300 Z" fill="#111827" /> {/* Black shoulders */}
                
                {/* White Triangle Shirt Front */}
                <polygon points="170,240 220,240 195,290" fill="#FFFFFF" />
                
                {/* Black Bow Tie */}
                <polygon points="180,242 195,250 180,258" fill="#1F2937" />
                <polygon points="210,242 195,250 210,258" fill="#1F2937" />
                <circle cx="195" cy="250" r="4.5" fill="#111827" />

                {/* Sharp Tuxedo Jacket Lapels */}
                <polygon points="115,300 148,235 168,260 155,300" fill="#030712" />
                <polygon points="275,300 242,235 222,260 235,300" fill="#030712" />

                {/* Head Base */}
                <rect x="155" y="105" width="80" height="110" rx="40" fill="url(#skinGrad)" filter="url(#shadow)" />

                {/* Hair (Classic DiCaprio side part combed look) */}
                <path d="M152 110 C152 75, 238 75, 238 110 C242 90, 215 70, 195 72 C180 70, 155 90, 152 110 Z" fill="#1A1510" />
                {/* Hair parting detail */}
                <path d="M155 106 C170 85, 210 90, 235 102" stroke="#453225" strokeWidth="4" fill="none" />

                {/* Beard Stubble */}
                <path d="M155 155 C155 215, 235 215, 235 155 Q235 205, 195 210 Q155 205, 155 155 Z" fill="url(#stubbleGrad)" />

                {/* Confident proud eyebrows */}
                <path d="M168 132 Q178 128 188 132" stroke="#271A11" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M202 132 Q212 128 222 132" stroke="#271A11" strokeWidth="3.5" strokeLinecap="round" />

                {/* Smiling Twinkling Eyes */}
                <ellipse cx="178" cy="144" rx="9" ry="4.5" fill="#FFFFFF" />
                <circle cx="178" cy="144" r="4.5" fill="#3B82F6" /> {/* Blue eyes */}
                <circle cx="176" cy="142" r="1.5" fill="#FFFFFF" /> {/* Twinkle */}
                <path d="M167 142 C167 142, 178 137, 189 142" stroke="#874F34" strokeWidth="1.5" />

                <ellipse cx="212" cy="144" rx="9" ry="4.5" fill="#FFFFFF" />
                <circle cx="212" cy="144" r="4.5" fill="#3B82F6" />
                <circle cx="210" cy="142" r="1.5" fill="#FFFFFF" />
                <path d="M201 142 C201 142, 212 137, 223 142" stroke="#874F34" strokeWidth="1.5" />

                {/* Nose */}
                <path d="M190 148 Q195 168 193 168 Q198 168 200 160" stroke="#D39270" strokeWidth="2.5" strokeLinecap="round" />

                {/* Epic Morgan Freeman wide motivational smile */}
                {/* Open grin with teeth outline */}
                <path d="M174 180 Q195 206 216 180 Z" fill="#FFFFFF" stroke="#451A03" strokeWidth="2.5" />
                <path d="M176 182 Q195 190 214 182" stroke="#E5B191" strokeWidth="1.5" /> {/* Tongue/mouth depth line */}

                {/* CHEERS CHAMPAGNE GLASS AND HAND OVERLAY */}
                <g transform="translate(245, 140)" className="animate-pulse">
                  {/* Champagne Glass Stem & Fluid */}
                  <path d="M20 70 L20 100" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" /> {/* Stem */}
                  <ellipse cx="20" cy="100" rx="18" ry="4" fill="#CBD5E1" /> {/* Base */}
                  
                  {/* Champagne Glass Bowl */}
                  <path d="M2 30 C2 30, 2 65, 20 70 C38 65, 38 30, 38 30 Z" fill="#FFFFFF" fillOpacity="0.15" stroke="#F1F5F9" strokeWidth="2" />
                  
                  {/* Sparkling Champagne Juice */}
                  <path d="M4 42 C4 42, 4 64, 20 68 C36 64, 36 42, 36 42 Z" fill="#F59E0B" fillOpacity="0.8" />
                  <ellipse cx="20" cy="42" rx="16" ry="3" fill="#FCD34D" />
                  
                  {/* Effervescence Bubbles */}
                  <circle cx="12" cy="50" r="1.5" fill="#FFFFFF" />
                  <circle cx="20" cy="58" r="1" fill="#FFFFFF" />
                  <circle cx="28" cy="48" r="2" fill="#FFFFFF" />
                  <circle cx="16" cy="62" r="1" fill="#FFFFFF" />
                  <circle cx="24" cy="52" r="1.5" fill="#FFFFFF" />

                  {/* Hand fingers clasping glass bowl */}
                  <path d="M0 58 Q-10 62 -2 70" stroke="#E5B191" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="1" cy="58" r="4.5" fill="#E5B191" />
                  <circle cx="3" cy="64" r="4.5" fill="#E5B191" />
                </g>
              </g>
            )}

            {/* Glowing party text ribbon */}
            <rect x="50" y="244" width="300" height="30" rx="8" fill="#1E1B10" stroke="#D97706" strokeWidth="1.5" />
            <text x="200" y="264" fill="#F59E0B" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1.5">★ MOTIVATION ENGAGED ★</text>
          </>
        )}
      </svg>
    </div>
  );
}
