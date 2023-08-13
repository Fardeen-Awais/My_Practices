// This file sets up internationalization (i18n) configuration and TypeScript types.

// Define an object containing i18n configuration options.
export const i18n = {
  // Set the default locale for your application.
  defaultLocale: 'en',
  
  // Define an array of supported locales for your application.
  locales: ['en', 'de', 'cs','urdu','chi'],
} as const;

// Define a TypeScript type named 'Locale' to represent one of the supported locales.
// The type 'Locale' will be used to ensure type safety when working with locales.
export type Locale = (typeof i18n)['locales'][number];
