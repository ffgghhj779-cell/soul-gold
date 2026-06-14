---
name: Soul Gold
colors:
  surface: '#fff8f3'
  surface-dim: '#e1d9cf'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2e8'
  surface-container: '#f6ece3'
  surface-container-high: '#f0e7dd'
  surface-container-highest: '#eae1d7'
  on-surface: '#1f1b15'
  on-surface-variant: '#4a463f'
  inverse-surface: '#343029'
  inverse-on-surface: '#f8efe5'
  outline: '#7b776e'
  outline-variant: '#ccc6bc'
  surface-tint: '#625e56'
  primary: '#625e56'
  on-primary: '#ffffff'
  primary-container: '#fef7ed'
  on-primary-container: '#757169'
  inverse-primary: '#ccc6bc'
  secondary: '#645d58'
  on-secondary: '#ffffff'
  secondary-container: '#e7ded7'
  on-secondary-container: '#68615c'
  tertiary: '#785a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff7ee'
  on-tertiary-container: '#8f6c04'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e8e2d8'
  primary-fixed-dim: '#ccc6bc'
  on-primary-fixed: '#1e1b16'
  on-primary-fixed-variant: '#4a463f'
  secondary-fixed: '#eae1da'
  secondary-fixed-dim: '#cec5be'
  on-secondary-fixed: '#1f1b17'
  on-secondary-fixed-variant: '#4b4641'
  tertiary-fixed: '#ffdf9c'
  tertiary-fixed-dim: '#edc15a'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#fff8f3'
  on-background: '#1f1b15'
  surface-variant: '#eae1d7'
typography:
  headline-display:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is built for a premium artisan culinary experience, targeting a discerning audience that values craft, provenance, and the sensory joy of gourmet ingredients. The brand personality is rooted in "approachable luxury"—it is sophisticated enough for a Michelin-star chef but warm enough for a home enthusiast.

The visual style is a blend of **Minimalism** and **Tactile Sophistication**. It prioritizes high-quality editorial photography, generous whitespace to suggest an unhurried shopping experience, and subtle organic details that evoke the textures of fine linen, handmade ceramics, and raw ingredients. The emotional response should be one of quiet confidence, warmth, and appetite.

## Colors
This design system utilizes a palette inspired by natural, earthy elements to maintain a "warm luxury" aesthetic.

- **Primary (Cream - #FEF7ED):** Used as the foundational surface color for the entire UI. It provides a softer, more organic feel than pure white, mimicking high-quality parchment or bone china.
- **Secondary (Dark Obsidian - #1A1612):** Used for primary typography and deep structural elements. It ensures high legibility and a sense of grounded authority.
- **Tertiary (Gold - #C9A03D):** Reserved for subtle accents, call-to-actions, and premium indicators. It should be used sparingly to maintain its value—like a garnish on a plate.
- **Neutral (Warm Taupe - #4A453E):** Used for secondary text, borders, and UI icons to bridge the gap between the dark obsidian and the cream background.

## Typography
The typography system relies on a high-contrast pairing between a classical serif and a contemporary sans-serif.

- **Headlines:** Use **EB Garamond**. It brings a literary, historical, and luxurious feel to the brand. Titles should use Medium weights to feel substantial but not heavy. Use tight letter-spacing for large display sizes to maintain a sophisticated "editorial" look.
- **Body & UI:** Use **Hanken Grotesk**. This font provides exceptional clarity and a sharp, modern edge that balances the traditionalism of the serif. 
- **Labels:** Product categories, prices, and tags use Hanken Grotesk with increased tracking (letter-spacing) and uppercase styling to denote hierarchy and structure.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure a curated, gallery-like presentation, while transitioning to a fluid, high-margin model on mobile.

- **Desktop:** A 12-column grid with a maximum container width of 1280px. Gutters are kept at 24px, but margins are generous (starting at 48px) to frame the content.
- **Vertical Rhythm:** Use an 8px base unit. Section spacing should be aggressive (80px or 120px) to allow ingredients and products to "breathe," emphasizing quality over quantity.
- **Mobile:** Transition to a 4-column grid with 16px gutters and 20px side margins. Large display headlines should scale down to ensure they don't break awkwardly on small viewports.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** and **Soft Ambient Shadows** rather than stark borders.

- **Surfaces:** Use subtle shifts in color (slightly darker cream or very pale taupe) to define sections. 
- **Shadows:** Shadows are rare and intentional. When used (e.g., on a floating "Add to Cart" button or a product modal), they are extremely diffused, low-opacity, and tinted with a hint of the tertiary gold or secondary obsidian to avoid looking "gray" or "muddy."
- **Glassmorphism:** Use a light blur effect (12px-20px) on navigation bars or filters when scrolling over rich imagery to maintain context while keeping the text legible.

## Shapes
The shape language is primarily **Soft (0.25rem)** to maintain a balance between the precision of a professional kitchen and the organic nature of food. 

Avoid perfectly sharp corners, which can feel too clinical or aggressive. For specific organic elements like "Editor's Choice" badges or decorative image masks, use asymmetrical radii or circular "pill" shapes to break the rigid grid and introduce a human, artisan touch.

## Components
Components should feel like objects of craft.

- **Buttons:** Primary buttons use a solid Dark Obsidian background with Gold text or vice versa. Secondary buttons use a fine 1px border. The hover state should be a subtle shift in background tone, never a jarring color change.
- **Inputs:** Text fields use a simple bottom border or a very light taupe fill. The focus state is indicated by a Gold underline or a subtle glow.
- **Cards:** Product cards are borderless with a focus on high-resolution imagery. Price and title should be center-aligned or elegantly tucked to the left, using typography rather than containers to define the space.
- **Chips/Badges:** Use "pill" shapes for tags (e.g., "Organic", "Vintage", "Limited"). Use low-saturation background colors derived from the primary/tertiary palette.
- **Interactive Lists:** Used for ingredient breakdowns or sourcing notes, featuring high-contrast typography and subtle dividers (0.5px thickness).
- **Product Tiles:** Should include a "Quick Add" hover state that appears with a soft fade, minimizing UI clutter until the user expresses intent.