"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { aklBrandLibrary } from "@/lib/brand-library";
import type { GenerateFormValues, GenerateResponse, GeneratedVariation } from "@/lib/types";

const BrandLibraryModal = dynamic(() => import("@/components/BrandLibraryModal"), { ssr: false });

const PLATFORM_OPTIONS = [
  { value: "instagram", label: "Instagram", emoji: "📸", charLimit: 2200 },
  { value: "facebook", label: "Facebook", emoji: "👍", charLimit: 63206 },
  { value: "twitter", label: "X (Twitter)", emoji: "🐦", charLimit: 280 },
  { value: "linkedin", label: "LinkedIn", emoji: "💼", charLimit: 3000 },
  { value: "tiktok", label: "TikTok", emoji: "🎵", charLimit: 2200 },
] as const;

const CONTENT_TYPES = [
  { value: "promotional", label: "Promotional" },
  { value: "informational", label: "Informational" },
  { value: "engagement", label: "Engagement" },
  { value: "event", label: "Event / Activation" },
  { value: "behind-the-scenes", label: "Behind the Scenes" },
  { value: "sustainability", label: "Sustainability" },
  { value: "community", label: "Community / Culture" },
] as const;

const TONES = [
  { value: "warm", label: "Warm & Welcoming" },
  { value: "professional", label: "Professional" },
  { value: "playful", label: "Playful & Fun" },
  { value: "inspiring", label: "Inspiring" },
  { value: "informative", label: "Helpful & Informative" },
] as const;

const AUDIENCE_OPTIONS = Object.entries(aklBrandLibrary.targetAudiences).map(([key, val]) => ({
  value: key,
  label: val.name,
}));

const defaultForm: GenerateFormValues = {
  platform: "instagram",
  contentType: "promotional",
  topic: "",
  audience: "internationalTravellers",
  tone: "warm",
  keyMessages: [],
  includeHashtags: true,
  includeEmoji: true,
  variations: 2,
  additionalContext: "",
  callToAction: "",
};

function charCountClass(count: number, limit: number) {
  const pct = count / limit;
  if (pct < 0.8) return "char-safe";
  if (pct < 1) return "char-warn";
  return "char-over";
}

export default function Home() {
  const [form, setForm] = useState<GenerateFormValues>(defaultForm);
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showLibrary, setShowLibrary] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const selectedPlatform = PLATFORM_OPTIONS.find((p) => p.value === form.platform)!;

  const update = <K extends keyof GenerateFormValues>(key: K, value: GenerateFormValues[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleKeyMessage = (id: string) => {
    setForm((prev) => ({
      ...prev,
      keyMessages: prev.keyMessages.includes(id)
        ? prev.keyMessages.filter((k) => k !== id)
        : [...prev.keyMessages, id],
    }));
  };

  const handleGenerate = async () => {
    if (!form.topic.trim()) {
      setError("Please enter a topic or subject for the post.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Generation failed");
      }

      const data: GenerateResponse = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="akl-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">✈️</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">AKL Social Copy Generator</h1>
              <p className="text-white/70 text-xs">Auckland Airport Brand Voice</p>
            </div>
          </div>
          <button
            onClick={() => setShowLibrary(true)}
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Brand Library
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form Panel */}
          <div className="lg:col-span-2 space-y-5">

            {/* Platform */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-800 mb-3">Platform</label>
              <div className="grid grid-cols-3 gap-2 mb-1">
                {PLATFORM_OPTIONS.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => update("platform", p.value)}
                    className={`flex flex-col items-center gap-1 py-2.5 px-2 rounded-lg border text-xs font-medium transition-all ${
                      form.platform === p.value
                        ? "border-[#007B87] bg-[#007B87]/5 text-[#007B87]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-lg">{p.emoji}</span>
                    {p.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Char limit: <span className="font-medium">{selectedPlatform.charLimit.toLocaleString()}</span>
              </p>
            </div>

            {/* Content Type */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-800 mb-3">Content Type</label>
              <div className="grid grid-cols-2 gap-2">
                {CONTENT_TYPES.map((ct) => (
                  <button
                    key={ct.value}
                    onClick={() => update("contentType", ct.value)}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium text-left transition-all ${
                      form.contentType === ct.value
                        ? "border-[#007B87] bg-[#007B87]/5 text-[#007B87]"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {ct.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Topic / Subject <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.topic}
                onChange={(e) => update("topic", e.target.value)}
                placeholder="e.g. New direct route to Tokyo launching this winter, summer travel deals, Matariki celebrations at the terminal..."
                rows={3}
                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 resize-none focus:border-[#007B87] focus:ring-1 focus:ring-[#007B87] transition-colors"
              />
              <label className="block text-sm font-semibold text-gray-800 mt-4 mb-2">Call to Action</label>
              <input
                value={form.callToAction}
                onChange={(e) => update("callToAction", e.target.value)}
                placeholder="e.g. Book now, Find out more, Tag a friend..."
                className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:border-[#007B87] focus:ring-1 focus:ring-[#007B87] transition-colors"
              />
            </div>

            {/* Audience & Tone */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Target Audience</label>
                  <select
                    value={form.audience}
                    onChange={(e) => update("audience", e.target.value as GenerateFormValues["audience"])}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:border-[#007B87] focus:ring-1 focus:ring-[#007B87]"
                  >
                    {AUDIENCE_OPTIONS.map((a) => (
                      <option key={a.value} value={a.value}>{a.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Tone</label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {TONES.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => update("tone", t.value)}
                        className={`py-2 px-3 rounded-lg border text-xs font-medium text-left transition-all ${
                          form.tone === t.value
                            ? "border-[#007B87] bg-[#007B87]/5 text-[#007B87]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Messages */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-800 mb-1">Key Messages</label>
              <p className="text-xs text-gray-500 mb-3">Select brand messages to weave in (optional)</p>
              <div className="space-y-2">
                {aklBrandLibrary.keyMessages.map((msg) => (
                  <label
                    key={msg.id}
                    className="flex items-start gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={form.keyMessages.includes(msg.id)}
                      onChange={() => toggleKeyMessage(msg.id)}
                      className="mt-0.5 rounded border-gray-300 text-[#007B87] focus:ring-[#007B87]"
                    />
                    <span className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors leading-snug">
                      {msg.message}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <label className="block text-sm font-semibold text-gray-800 mb-3">Options</label>
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-700">Include hashtags</span>
                  <div
                    onClick={() => update("includeHashtags", !form.includeHashtags)}
                    className={`w-10 h-6 rounded-full relative transition-colors cursor-pointer ${
                      form.includeHashtags ? "bg-[#007B87]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        form.includeHashtags ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-700">Include emoji</span>
                  <div
                    onClick={() => update("includeEmoji", !form.includeEmoji)}
                    className={`w-10 h-6 rounded-full relative transition-colors cursor-pointer ${
                      form.includeEmoji ? "bg-[#007B87]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        form.includeEmoji ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </div>
                </label>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Variations</span>
                  <div className="flex gap-1.5">
                    {([1, 2, 3] as const).map((n) => (
                      <button
                        key={n}
                        onClick={() => update("variations", n)}
                        className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                          form.variations === n
                            ? "bg-[#007B87] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-800 mb-2">Additional Context</label>
                <textarea
                  value={form.additionalContext}
                  onChange={(e) => update("additionalContext", e.target.value)}
                  placeholder="Any other details, constraints, or context..."
                  rows={2}
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 resize-none focus:border-[#007B87] focus:ring-1 focus:ring-[#007B87] transition-colors"
                />
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full akl-gradient text-white font-semibold py-3.5 rounded-xl transition-opacity disabled:opacity-60 flex items-center justify-center gap-2 text-sm shadow-md"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating copy...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Copy
                </>
              )}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* Output Panel */}
          <div className="lg:col-span-3 space-y-4">
            {!result && !loading && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#003057]/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✈️</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Ready to generate</h3>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  Fill in the parameters on the left and hit Generate Copy to produce on-brand social content for Auckland Airport.
                </p>
                <button
                  onClick={() => setShowLibrary(true)}
                  className="mt-4 text-sm text-[#007B87] hover:text-[#003057] font-medium transition-colors"
                >
                  Explore the Brand Library →
                </button>
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#007B87] rounded-full"
                      style={{ animation: `pulse-soft 1.4s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">Crafting your copy using Auckland Airport brand voice...</p>
              </div>
            )}

            {result && (
              <div className="space-y-4 fade-in">
                {/* Brand Notes */}
                {result.brandNotes && (
                  <div className="bg-[#003057]/5 border border-[#003057]/15 rounded-xl p-4 flex gap-3">
                    <span className="text-[#003057] text-lg flex-shrink-0">💡</span>
                    <div>
                      <div className="text-xs font-semibold text-[#003057] mb-1">Brand Voice Note</div>
                      <p className="text-sm text-[#003057]/80">{result.brandNotes}</p>
                    </div>
                  </div>
                )}

                {/* Variations */}
                {result.variations.map((variation: GeneratedVariation, index: number) => (
                  <VariationCard
                    key={index}
                    variation={variation}
                    index={index}
                    platform={selectedPlatform}
                    copied={copiedIndex === index}
                    onCopy={() => copyToClipboard(variation.copy, index)}
                    onRegenerate={handleGenerate}
                  />
                ))}

                <button
                  onClick={handleGenerate}
                  className="w-full py-2.5 border-2 border-dashed border-[#007B87]/40 rounded-xl text-sm text-[#007B87] font-medium hover:border-[#007B87] hover:bg-[#007B87]/5 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Regenerate all variations
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {showLibrary && <BrandLibraryModal onClose={() => setShowLibrary(false)} />}
    </div>
  );
}

interface VariationCardProps {
  variation: GeneratedVariation;
  index: number;
  platform: (typeof PLATFORM_OPTIONS)[number];
  copied: boolean;
  onCopy: () => void;
  onRegenerate: () => void;
}

function VariationCard({ variation, index, platform, copied, onCopy }: VariationCardProps) {
  const charPct = variation.characterCount / platform.charLimit;
  const isOver = charPct >= 1;

  return (
    <div className="copy-card fade-in">
      <div className="flex items-start justify-between mb-3 gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-700">Variation {index + 1}</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">
            {platform.emoji} {platform.label}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-xs font-medium ${charCountClass(variation.characterCount, platform.charLimit)}`}>
            {variation.characterCount.toLocaleString()}/{platform.charLimit.toLocaleString()} chars
            {isOver && " ⚠️"}
          </span>
          <button
            onClick={onCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              copied
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {copied ? (
              <>✓ Copied</>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Character bar */}
      <div className="h-1 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${
            isOver ? "bg-red-400" : charPct > 0.8 ? "bg-amber-400" : "bg-green-400"
          }`}
          style={{ width: `${Math.min(charPct * 100, 100)}%` }}
        />
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap font-mono text-xs">
        {variation.copy}
      </div>

      {variation.notes && (
        <p className="text-xs text-gray-400 mt-3 italic">{variation.notes}</p>
      )}

      {variation.hashtags && variation.hashtags.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1.5">Suggested additional hashtags:</p>
          <div className="flex flex-wrap gap-1.5">
            {variation.hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => navigator.clipboard.writeText(tag)}
                className="bg-[#003057]/8 text-[#003057] px-2 py-0.5 rounded text-xs hover:bg-[#003057]/15 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
