import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ThumbsUp,
  Cpu,
  Sparkles,
  Share2,
  MessageSquare,
  Sparkle,
} from 'lucide-react';
import { ResponseOption } from './types';
import MemePoster, { optionData, OPTION_ID_TO_KEY } from './components/MemePoster';

const OPTIONS: ResponseOption[] = [
  {
    id: 1,
    label: 'Option 1: Too AI-ish. Pretty sure a bot wrote this post while sipping a digital latte.',
    avatarType: 'bored',
  },
  {
    id: 2,
    label: 'Option 2: Got bored after the second sentence. I\'m just here for the colorful certificate.',
    avatarType: 'unamused',
  },
  {
    id: 3,
    label: 'Option 3: Did not read at all. Just giving an automatic like so the LinkedIn algorithm stays happy.',
    avatarType: 'grumpy',
  },
  {
    id: 4,
    label: 'Option 4: Absolutely inspired! Currently logging into Google AI Studio to build my own apps.',
    avatarType: 'tuxedo',
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState<1 | 2 | 3 | 4 | null>(null);
  const [variantIndex, setVariantIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (optionId: 1 | 2 | 3 | 4, index: number) => {
    const optionKey = OPTION_ID_TO_KEY[optionId];
    const track = optionData[optionKey].audio[index];

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    audio.src = track;
    void audio.play().catch(() => {});
  };

  const handleSelectOption = (id: 1 | 2 | 3 | 4) => {
    const randomIndex = Math.floor(Math.random() * 3);
    setSelectedId(id);
    setVariantIndex(randomIndex);
    playTrack(id, randomIndex);
  };

  const currentOption = selectedId ? OPTIONS.find((o) => o.id === selectedId) : null;
  const currentCritiqueText =
    selectedId !== null
      ? optionData[OPTION_ID_TO_KEY[selectedId]].texts[variantIndex]
      : null;

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200 h-screen overflow-hidden text-slate-800 font-sans flex flex-col px-8 py-2">
      <div className="max-w-7xl w-full mx-auto flex flex-col flex-1 min-h-0">
        <header id="main-header" className="mb-1.5 shrink-0 text-center">
          <div className="inline-flex items-center gap-1.5 bg-slate-200/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-300/30 text-[10px] text-slate-600 font-semibold uppercase tracking-wider mb-1">
            <Sparkle className="w-2.5 h-2.5 text-blue-500 fill-blue-500 animate-pulse" />
            LinkedIn Post Evaluator
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            LinkedIn Post Evaluator
          </h1>
        </header>

        <main className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch overflow-hidden">
          <section id="selector-column" className="lg:col-span-7 flex flex-col gap-1.5 min-h-0 h-full overflow-hidden">
            <div
              id="linkedin-post-card"
              className="bg-white rounded-xl p-3 shadow-sm border border-slate-200/80 shrink-0 w-full"
            >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-tr from-slate-900 to-blue-950 border border-slate-200/10 flex-shrink-0 flex items-center justify-center p-0.5 shadow-inner">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="url(#avatarBgGrad)" />
                    <defs>
                      <linearGradient id="avatarBgGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                      <linearGradient id="skinGradSmall" x1="50" y1="35" x2="50" y2="70">
                        <stop offset="0%" stopColor="#FAD3B6" />
                        <stop offset="100%" stopColor="#E5B191" />
                      </linearGradient>
                      <linearGradient id="stubbleGradSmall" x1="50" y1="50" x2="50" y2="72">
                        <stop offset="0%" stopColor="#9C9590" stopOpacity="0" />
                        <stop offset="100%" stopColor="#4A4F56" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <path d="M22 88 C32 70, 68 70, 78 88 Z" fill="#1E293B" />
                    <polygon points="42,72 58,72 50,82" fill="#FFFFFF" />
                    <rect x="36" y="30" width="28" height="38" rx="14" fill="url(#skinGradSmall)" />
                    <path d="M34 32 C36 18, 64 18, 66 32 C68 24, 58 16, 50 17 C42 16, 32 24, 34 32 Z" fill="#1E1E24" />
                    <path d="M40 22 L42 16 L45 19 L48 14 L52 18 L55 13 L58 17 L61 15 L63 21" stroke="#1E1E24" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M36 49 C36 71, 64 71, 64 49 Q64 67, 50 69 Q36 67, 36 49 Z" fill="url(#stubbleGradSmall)" />
                    <ellipse cx="44" cy="44" rx="3" ry="1.5" fill="#FFFFFF" />
                    <circle cx="44" cy="44" r="1.5" fill="#3B82F6" />
                    <ellipse cx="56" cy="44" rx="3" ry="1.5" fill="#FFFFFF" />
                    <circle cx="56" cy="44" r="1.5" fill="#3B82F6" />
                    <path d="M43 55 Q50 62 57 55" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M43 55 Q50 62 57 55" stroke="#451A03" strokeWidth="1" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1 flex-wrap">
                    <h3 className="font-bold text-[13px] text-slate-900 flex items-center gap-1">
                      <span>Renārs Penezis</span>
                      <span className="inline-flex items-center justify-center bg-blue-600 rounded-full p-0.5 w-3 h-3" title="Verified Professional">
                        <svg className="w-[7px] h-[7px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    </h3>
                    <span className="text-[10px] text-slate-400 font-normal">• 1st</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight mt-0.5 font-medium">
                    Retired from fuel planning... now fueling my own idea
                  </p>
                  <p className="text-[9px] text-slate-400 flex items-center gap-1 mt-0.5 font-normal">
                    2026 • Edited • <Cpu className="w-2 h-2" />
                  </p>
                </div>
              </div>

              <button className="text-[10px] font-semibold text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-full flex items-center gap-1 transition-colors">
                <span>+ Follow</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-800 space-y-1 font-normal leading-snug text-justify">
              <p className="font-medium">
                🚨 LinkedIn Bro Protocol Rule #1: If you don&apos;t post your certificate, did you even learn anything?
              </p>
              <p>
                According to the unwritten laws of professional networking, it is my absolute civic duty to inform you that I have successfully completed the Google AI Professional Certificate program! 📜🎓
              </p>
              <p>
                But jokes and corporate obligations aside—this 7-course deep dive was an absolute banger. It&apos;s one thing to use AI as a casual chatbot, but it&apos;s a whole different game when you start leveraging it as a structured engine to optimize your workflows.
              </p>
              <p>
                During the program, I&apos;ve been heavily experimenting with how Google&apos;s ecosystem can actually transform operations and data flows. Here are the tools that are already integrated into my daily toolkit:
              </p>
              <div className="space-y-0.5 pl-1.5 border-l-2 border-slate-100 my-1">
                <p>
                  🔍 <strong className="font-semibold text-slate-900">Gemini Deep Research:</strong> Absolute wizardry for cutting through the noise and automating complex market or technical analysis.
                </p>
                <p>
                  📚 <strong className="font-semibold text-slate-900">NotebookLM:</strong> Throwing scattered documentation into it and getting an interactive knowledge base out is pure efficiency.
                </p>
                <p>
                  💎 <strong className="font-semibold text-slate-900">Custom Gems:</strong> Building specialized AI personas designed to tackle repetitive operational bottlenecks.
                </p>
                <p>
                  🛠️ <strong className="font-semibold text-slate-900">Google AI Studio Features:</strong> Exploring Structured Outputs to rapidly build personal, custom tools and apps.
                </p>
              </div>
              <p>The automation journey continues! 🚀</p>
              <p className="text-blue-600 font-medium flex flex-wrap gap-x-1 leading-snug pt-0.5 text-[10px]">
                <span>#GoogleAI</span> <span>#ContinuousLearning</span> <span>#Automation</span> <span>#NotebookLM</span> <span>#AIStudio</span> <span>#Productivity</span>
              </p>
            </div>

            <div className="border-t border-slate-100 mt-2 pt-1.5 flex items-center justify-between text-[10px] text-slate-400">
              <div className="flex items-center gap-1">
                <span className="bg-blue-400 text-white rounded-full p-0.5 text-[7px] flex items-center justify-center w-3.5 h-3.5">👍</span>
                <span className="bg-red-400 text-white rounded-full p-0.5 text-[7px] flex items-center justify-center w-3.5 h-3.5">❤️</span>
                <span>Renārs and 462 others</span>
              </div>
              <div className="flex items-center gap-2">
                <span>82 comments</span>
                <span>•</span>
                <span>124 shares</span>
              </div>
            </div>

            <div className="border-t border-slate-100 mt-1 pt-1 flex items-center justify-between text-slate-500 font-medium text-[10px]">
              <button className="flex items-center justify-center gap-1 py-1 px-1 rounded-md hover:bg-slate-100/70 cursor-pointer transition-colors w-full">
                <ThumbsUp className="w-3.5 h-3.5 text-slate-400" /> Like
              </button>
              <button className="flex items-center justify-center gap-1 py-1 px-1 rounded-md hover:bg-slate-100/70 cursor-pointer transition-colors w-full">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> Comment
              </button>
              <button className="flex items-center justify-center gap-1 py-1 px-1 rounded-md hover:bg-slate-100/70 cursor-pointer transition-colors w-full">
                <Share2 className="w-3.5 h-3.5 text-slate-400" /> Share
              </button>
            </div>
          </div>

          <div id="survey-card" className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-200/80 flex-1 min-h-0 flex flex-col overflow-hidden">
            <h2 className="text-sm font-bold text-slate-900 mb-0.5 flex items-center gap-1.5 shrink-0">
              <Sparkles className="w-4 h-4 text-amber-500" /> Choose Your Reaction
            </h2>
            <p className="text-[10px] text-slate-400 mb-1.5 shrink-0">
              Select one statement to evaluate the post and generate a reaction.
            </p>

            <div className="flex flex-col gap-1.5 flex-1 min-h-0 overflow-hidden">
              {OPTIONS.map((option) => {
                const isSelected = selectedId === option.id;
                return (
                  <button
                    key={option.id}
                    id={`option-card-${option.id}`}
                    onClick={() => handleSelectOption(option.id as 1 | 2 | 3 | 4)}
                    className={`w-full shrink-0 text-left px-3 py-2 rounded-lg border transition-all flex items-center gap-2.5 cursor-pointer relative group ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-2 ring-blue-500/10'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
                    }`}
                  >
                    <div className="flex items-center justify-center shrink-0">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-slate-300 bg-white group-hover:border-slate-400'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                    <p
                      className={`flex-1 text-[13px] font-medium leading-snug ${
                        isSelected ? 'text-blue-900' : 'text-slate-700'
                      }`}
                    >
                      {option.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="response-column" className="lg:col-span-5 min-h-0 h-full flex flex-col max-w-md w-full mx-auto lg:mx-0 lg:max-w-none">
          <AnimatePresence mode="wait">
            {!selectedId || !currentOption || !currentCritiqueText ? (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                id="empty-response-placeholder"
                className="bg-slate-100 border-2 border-dashed border-slate-300/60 rounded-2xl p-6 text-center flex flex-col items-center justify-center flex-1 min-h-0 h-full"
              >
                <div className="w-10 h-10 rounded-full bg-slate-200/80 flex items-center justify-center mb-2 text-slate-500 text-xl border border-slate-300/40">
                  ⚡
                </div>
                <h3 className="text-sm font-bold text-slate-700">Evaluation Standby</h3>
                <p className="text-[10px] text-slate-400 mt-1 max-w-[220px] leading-relaxed">
                  Click an option on the left to evaluate the post and load the meme response.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`response-${selectedId}-${variantIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                id="response-panel-card"
                className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden text-white border border-slate-800 flex flex-col flex-1 min-h-0 h-full"
              >
                <div className="p-3 flex flex-col justify-start items-center w-full">
                  <MemePoster optionId={selectedId} imageIndex={variantIndex} />

                  <div className="w-full mt-2 p-3 rounded-xl bg-slate-950/50 border border-slate-700/50 text-base leading-snug text-slate-100 italic">
                    &ldquo;{currentCritiqueText}&rdquo;
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        </main>
      </div>
    </div>
  );
}
