import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { aklBrandLibrary } from "@/lib/brand-library";
import type { GenerateFormValues, GenerateResponse } from "@/lib/types";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const body: GenerateFormValues = await request.json();
    const {
      platform,
      contentType,
      topic,
      audience,
      tone,
      keyMessages,
      includeHashtags,
      includeEmoji,
      variations,
      additionalContext,
      callToAction,
    } = body;

    const platformGuide = aklBrandLibrary.platformGuidelines[platform];
    const audienceGuide =
      aklBrandLibrary.targetAudiences[audience as keyof typeof aklBrandLibrary.targetAudiences];
    const selectedKeyMessages = aklBrandLibrary.keyMessages
      .filter((m) => keyMessages.includes(m.id))
      .map((m) => m.message);

    const brandContext = `
# Auckland Airport Brand Voice Guide

## Identity
${aklBrandLibrary.identity.description}
Taglines: ${aklBrandLibrary.identity.taglines.join(" | ")}

## Brand Personality
${aklBrandLibrary.brandPersonality.summary}

Core Traits:
${aklBrandLibrary.brandPersonality.traits
  .map((t) => `- ${t.trait}: ${t.description}\n  DO: "${t.doExample}"\n  DON'T: "${t.dontExample}"`)
  .join("\n")}

## Tone of Voice Principles
${aklBrandLibrary.toneOfVoice.principles.map((p) => `- ${p.principle}: ${p.description}`).join("\n")}

Words to use: ${aklBrandLibrary.toneOfVoice.wordsToUse.join(", ")}
Words to avoid: ${aklBrandLibrary.toneOfVoice.wordsToAvoid.map((w) => `"${w.word}" → use "${w.use}"`).join(", ")}

## Platform: ${platformGuide.name}
- Character limit: ${platformGuide.characterLimit}
- Ideal length: ${platformGuide.idealLength}
- Tone: ${platformGuide.tone}
- Format: ${platformGuide.format.join("; ")}
- Best for: ${platformGuide.bestFor.join(", ")}
- Avoid: ${platformGuide.avoid.join(", ")}
- Example post: "${platformGuide.examplePost}"

## Target Audience: ${audienceGuide.name}
${audienceGuide.description}
Messaging focus: ${audienceGuide.messagingFocus.join(", ")}

## Key Messages to Incorporate
${selectedKeyMessages.length > 0 ? selectedKeyMessages.map((m) => `- ${m}`).join("\n") : "No specific key messages selected — use general brand voice."}

## Do's and Don'ts
DO: ${aklBrandLibrary.dosAndDonts.dos.slice(0, 5).join("; ")}
DON'T: ${aklBrandLibrary.dosAndDonts.donts.slice(0, 5).join("; ")}

## Emoji Guidance
${includeEmoji ? `Approved emojis: ${aklBrandLibrary.emojiGuidance.approved.map((e) => `${e.emoji} for ${e.use}`).join(", ")}. Rules: ${aklBrandLibrary.emojiGuidance.rules.join("; ")}` : "No emoji — this post should not include emoji."}

## Hashtags
${includeHashtags ? `Primary: ${aklBrandLibrary.approvedHashtags.primary.join(", ")}. Select relevant ones from brand library.` : "No hashtags — do not include any hashtags."}
    `.trim();

    const userPrompt = `
Generate ${variations} variation${variations > 1 ? "s" : ""} of social media copy for Auckland Airport with the following parameters:

**Platform:** ${platformGuide.name}
**Content Type:** ${contentType}
**Topic/Subject:** ${topic}
**Tone:** ${tone}
**Audience:** ${audienceGuide.name}
${callToAction ? `**Call to Action:** ${callToAction}` : ""}
${additionalContext ? `**Additional Context:** ${additionalContext}` : ""}

Return a JSON response in this exact format:
{
  "variations": [
    {
      "copy": "the full post copy",
      "characterCount": 123,
      "hashtags": ["#Tag1", "#Tag2"],
      "notes": "brief note about the approach taken for this variation"
    }
  ],
  "brandNotes": "brief guidance note about how this copy aligns with AKL brand voice"
}

Rules:
- Stay strictly within the character limit for ${platformGuide.name} (${platformGuide.characterLimit} chars max)
- Each variation should take a distinctly different angle or approach
- Hashtags should be in the copy only if includeHashtags is ${includeHashtags}
- Emoji in copy only if includeEmoji is ${includeEmoji}
- Write naturally in Auckland Airport's brand voice — warm, Kiwi, confident
- The "copy" field should contain the complete, ready-to-post text including hashtags if requested
- characterCount should count only the "copy" field text
- Do not include hashtags in the "hashtags" array if they are already in the "copy" field — the array is for suggested extras
    `.trim();

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      system: brandContext,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from Claude");
    }

    const jsonMatch = content.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not parse JSON from response");
    }

    const result: GenerateResponse = JSON.parse(jsonMatch[0]);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json(
      { error: "Failed to generate copy. Please try again." },
      { status: 500 }
    );
  }
}
