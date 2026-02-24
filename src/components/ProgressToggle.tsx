import { useState, useEffect } from 'react';

export default function ProgressToggle({ slug }: { slug: string }) {
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        // Read from localStorage on mount
        const stored = localStorage.getItem(`lesson-${slug}`);
        if (stored) {
            setCompleted(stored === 'true');
        }
    }, [slug]);

    const toggleStatus = () => {
        const nextStatus = !completed;
        setCompleted(nextStatus);
        localStorage.setItem(`lesson-${slug}`, String(nextStatus));
    };

    return (
        <button
            onClick={toggleStatus}
            className={`group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] ${completed
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 focus:ring-emerald-500 shadow-sm shadow-emerald-100/50'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-indigo-500 shadow-sm hover:shadow-md'
                }`}
            aria-pressed={completed}
        >
            <div className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${completed ? 'border-emerald-500 bg-emerald-500 scale-100' : 'border-slate-300 bg-slate-50 group-hover:border-slate-400 scale-95'}`}>
                {completed && (
                    <svg className="h-3.5 w-3.5 text-white animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <span>{completed ? 'Completed' : 'Mark as Complete'}</span>
        </button>
    );
}
