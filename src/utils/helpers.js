// Helper utilities - maintained by @namakne66-boop
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();