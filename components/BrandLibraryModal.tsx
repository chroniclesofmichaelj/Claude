"use client";

import { useState } from "react";
import { aklBrandLibrary } from "@/lib/brand-library";

interface Props {
  onClose: () => void;
}

const TABS = [
  { id: "voice", label: "Brand Voice" },
  { id: "platforms", label: "Platforms" },
  { id: "pillars", label: "Content Pillars" },
  { id: "hashtags", label: "Hashtags" },
  { id: "examples", label: "Copy Examples" },
  { id: "dosdonts", label: "Do's & Don'ts" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function BrandLibraryModal({ onClose }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("voice");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="akl-gradient p-6 rounded-t-2xl flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white/70 text-sm font-medium">✈️ Auckland Airport</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Brand Library</h2>
            <p className="text-white/80 text-sm mt-1">
              Offline reference for voice, tone, and copy guidelines
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors ml-4 mt-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-100 px-6 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-[#007B87] text-[#007B87]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex-1">
          {activeTab === "voice" && <VoiceTab />}
          {activeTab === "platforms" && <PlatformsTab />}
          {activeTab === "pillars" && <PillarsTab />}
          {activeTab === "hashtags" && <HashtagsTab />}
          {activeTab === "examples" && <ExamplesTab />}
          {activeTab === "dosdonts" && <DosDontsTab />}
        </div>
      </div>
    </div>
  );
}

function VoiceTab() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Personality</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {aklBrandLibrary.brandPersonality.summary}
        </p>
        <div className="grid gap-3">
          {aklBrandLibrary.brandPersonality.traits.map((t) => (
            <div key={t.trait} className="bg-gray-50 rounded-lg p-4">
              <div className="font-semibold text-[#003057] text-sm mb-1">{t.trait}</div>
              <p className="text-gray-600 text-sm mb-3">{t.description}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-green-50 border border-green-100 rounded p-2">
                  <span className="text-green-700 font-medium block mb-0.5">✓ Do</span>
                  <span className="text-green-800">"{t.doExample}"</span>
                </div>
                <div className="bg-red-50 border border-red-100 rounded p-2">
                  <span className="text-red-700 font-medium block mb-0.5">✗ Don't</span>
                  <span className="text-red-800">"{t.dontExample}"</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tone of Voice Principles</h3>
        <div className="space-y-2">
          {aklBrandLibrary.toneOfVoice.principles.map((p) => (
            <div key={p.principle} className="flex gap-3">
              <div className="w-1 rounded-full bg-[#007B87] flex-shrink-0 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">{p.principle} — </span>
                <span className="text-gray-600 text-sm">{p.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Words to Use</h3>
          <div className="flex flex-wrap gap-1.5">
            {aklBrandLibrary.toneOfVoice.wordsToUse.map((w) => (
              <span key={w} className="bg-[#003057]/10 text-[#003057] px-2 py-0.5 rounded text-xs font-medium">
                {w}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Words to Avoid</h3>
          <div className="space-y-1">
            {aklBrandLibrary.toneOfVoice.wordsToAvoid.map((w) => (
              <div key={w.word} className="text-xs text-gray-600">
                <span className="line-through text-red-500 font-medium">{w.word}</span>
                <span className="text-gray-400 mx-1">→</span>
                <span className="text-green-700">{w.use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformsTab() {
  const [selected, setSelected] = useState<keyof typeof aklBrandLibrary.platformGuidelines>("instagram");
  const platforms = Object.keys(aklBrandLibrary.platformGuidelines) as Array<keyof typeof aklBrandLibrary.platformGuidelines>;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => setSelected(p)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selected === p
                ? "bg-[#007B87] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {aklBrandLibrary.platformGuidelines[p].emoji}{" "}
            {aklBrandLibrary.platformGuidelines[p].name}
          </button>
        ))}
      </div>

      {(() => {
        const guide = aklBrandLibrary.platformGuidelines[selected];
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#003057]/5 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-500 mb-1">Character Limit</div>
                <div className="font-bold text-[#003057]">{guide.characterLimit.toLocaleString()}</div>
              </div>
              <div className="bg-[#007B87]/5 rounded-lg p-3 text-center col-span-2">
                <div className="text-xs text-gray-500 mb-1">Ideal Length</div>
                <div className="font-medium text-[#007B87] text-sm">{guide.idealLength}</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Tone</div>
              <p className="text-sm text-gray-600 bg-gray-50 rounded p-3">{guide.tone}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Format Rules</div>
                <ul className="space-y-1">
                  {guide.format.map((f, i) => (
                    <li key={i} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-[#007B87] font-bold">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Avoid</div>
                <ul className="space-y-1">
                  {guide.avoid.map((a, i) => (
                    <li key={i} className="text-xs text-red-600 flex gap-2">
                      <span className="font-bold">✗</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">Example Post</div>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-line border-l-4 border-[#007B87]">
                {guide.examplePost}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

function PillarsTab() {
  return (
    <div className="grid gap-4">
      {aklBrandLibrary.contentPillars.map((pillar) => (
        <div key={pillar.id} className="border border-gray-100 rounded-xl p-4">
          <div className="font-semibold text-[#003057] mb-1">{pillar.name}</div>
          <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
          <div className="space-y-2 mb-3">
            {pillar.examples.map((ex, i) => (
              <div key={i} className="bg-gray-50 rounded p-3 text-sm text-gray-700 italic">
                "{ex}"
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {pillar.hashtags.map((h) => (
              <span key={h} className="bg-[#003057]/10 text-[#003057] px-2 py-0.5 rounded text-xs">
                {h}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function HashtagsTab() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyTag = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopied(tag);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-6">
      {Object.entries(aklBrandLibrary.approvedHashtags).map(([category, tags]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-gray-700 mb-2 capitalize">
            {category.replace(/([A-Z])/g, " $1").trim()}
          </h3>
          <div className="flex flex-wrap gap-2">
            {(tags as readonly string[]).map((tag) => (
              <button
                key={tag}
                onClick={() => copyTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  copied === tag
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-[#003057]/10 hover:text-[#003057]"
                }`}
              >
                {copied === tag ? "✓ Copied!" : tag}
              </button>
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-500 mt-4">Click any hashtag to copy it to clipboard.</p>
    </div>
  );
}

function ExamplesTab() {
  const allExamples = Object.entries(aklBrandLibrary.copyExamples).flatMap(
    ([type, examples]) => examples.map((ex) => ({ type, ...ex }))
  );

  const [filter, setFilter] = useState("all");
  const types = ["all", ...Object.keys(aklBrandLibrary.copyExamples)];

  const filtered = filter === "all" ? allExamples : allExamples.filter((e) => e.type === filter);

  const platformColors: Record<string, string> = {
    instagram: "bg-pink-100 text-pink-700",
    facebook: "bg-blue-100 text-blue-700",
    twitter: "bg-sky-100 text-sky-700",
    linkedin: "bg-indigo-100 text-indigo-700",
    tiktok: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
              filter === t ? "bg-[#007B87] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((ex, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex gap-2">
              <span className={`platform-badge ${platformColors[ex.platform] || "bg-gray-100 text-gray-700"}`}>
                {ex.platform}
              </span>
              <span className="platform-badge bg-gray-100 text-gray-600 capitalize">{ex.type}</span>
            </div>
            <p className="text-sm text-gray-800 whitespace-pre-line">{ex.copy}</p>
            <p className="text-xs text-gray-400 italic">{ex.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DosDontsTab() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-semibold text-green-700 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-xs">✓</span>
          Do
        </h3>
        <ul className="space-y-2">
          {aklBrandLibrary.dosAndDonts.dos.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs">✗</span>
          Don't
        </h3>
        <ul className="space-y-2">
          {aklBrandLibrary.dosAndDonts.donts.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
