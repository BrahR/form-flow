import type { HighlightConfig } from "@ckeditor/ckeditor5-highlight";
import type { AlignmentConfig } from "@ckeditor/ckeditor5-alignment";

declare module "@ckeditor/ckeditor5-core" {
  interface EditorConfig {
    highlight?: HighlightConfig;
    alignment?: AlignmentConfig;
  }
}
