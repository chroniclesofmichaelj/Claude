import type { Platform, ContentType, Audience } from "./brand-library";

export interface GenerateFormValues {
  platform: Platform;
  contentType: ContentType;
  topic: string;
  audience: Audience;
  tone: "warm" | "professional" | "playful" | "inspiring" | "informative";
  keyMessages: string[];
  includeHashtags: boolean;
  includeEmoji: boolean;
  variations: 1 | 2 | 3;
  additionalContext: string;
  callToAction: string;
}

export interface GeneratedVariation {
  copy: string;
  characterCount: number;
  hashtags: string[];
  notes: string;
}

export interface GenerateResponse {
  variations: GeneratedVariation[];
  brandNotes: string;
}
