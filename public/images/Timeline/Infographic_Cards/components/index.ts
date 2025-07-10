// Purple Theme Components
export { default as InfographicTemplateFrontend } from './InfographicTemplateFrontend';
export { default as InfographicTemplateBrief } from './InfographicTemplateBrief';
export { default as InfographicTemplateLiveTesting } from './InfographicTemplateLiveTesting';
export { default as InfographicTemplateDesign } from './InfographicTemplateDesign';
export { default as InfographicTemplateApis } from './InfographicTemplateApis';

// Blue-Gray Theme Components
export { default as InfographicTemplateResearch } from './InfographicTemplateResearch';
export { default as InfographicTemplateUiDesign } from './InfographicTemplateUiDesign';
export { default as InfographicTemplateFrontendCoding } from './InfographicTemplateFrontendCoding';
export { default as InfographicTemplateBackend } from './InfographicTemplateBackend';
export { default as InfographicTemplateTesting } from './InfographicTemplateTesting';
export { default as InfographicTemplateDevops } from './InfographicTemplateDevops';

// Type definitions for component props
export interface InfographicCardProps {
  className?: string;
}

// Theme constants
export const PURPLE_THEME = {
  background: '#25202d',
  textBackground: '#302a38',
  textColor: '#ffffff',
} as const;

export const BLUE_GRAY_THEME = {
  background: '#1d282f',
  textBackground: '#26323a',
  textColor: '#ffffff',
} as const;

// Component dimensions
export const CARD_DIMENSIONS = {
  desktop: {
    width: 595,
    height: {
      standard: 283,
      frontend: 261,
      frontendCoding: 325,
    },
  },
  mobile: {
    height: {
      standard: 384,
      frontend: 400,
      frontendCoding: 460,
      liveTesting: 380,
    },
  },
} as const;