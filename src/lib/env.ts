
// Environment Detection and Validation
// Since Lovable doesn't support .env files, we use this approach

export const env = {
  // Detect environment
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,

  // Get Vite environment variables (these are safe to use in frontend)
  get: (key: string, defaultValue?: string) => {
    return import.meta.env[key] ?? defaultValue;
  },

  // Validate required environment setup
  validate: () => {
    const requiredKeys = [
      // Add any required Vite env vars here if needed
      // Example: 'VITE_APP_VERSION'
    ];

    const missing = requiredKeys.filter(key => !import.meta.env[key]);
    
    if (missing.length > 0) {
      console.warn('Missing environment variables:', missing);
    }

    return missing.length === 0;
  },

  // Debug info (only in development)
  debug: () => {
    if (import.meta.env.DEV) {
      console.log('Environment Info:', {
        mode: import.meta.env.MODE,
        dev: import.meta.env.DEV,
        prod: import.meta.env.PROD,
        baseUrl: import.meta.env.BASE_URL,
      });
    }
  }
};

// Initialize environment validation
env.validate();

if (env.isDev) {
  env.debug();
}

export default env;
