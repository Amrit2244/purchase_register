
// This page component can be a Server Component to fetch data like package.json version
// No 'use client' here as this is a Server Component

// Import the client component
import { SettingsContent } from '@/contexts/ThemeContext'; // Use SettingsContent from ThemeContext
// ThemeProvider and useTheme are not directly used here anymore.
// CSSProperties might not be needed either if all styling is in SettingsContent.

export default async function SettingsPage() {
  // Simulate reading package.json. In a real app, you might use fs.readFile
  // For this environment, we'll use the string obtained from the tool.
  const packageJsonContent = `{
    "name": "purchase_register",
    "version": "5.01.02",
    "private": true,
    "scripts": {
      "dev": "next dev --turbopack",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "@types/bcryptjs": "^2.4.6",
      "@types/next-auth": "^3.13.0",
      "bcryptjs": "^3.0.2",
      "file-saver": "^2.0.5",
      "framer-motion": "^12.7.3",
      "jspdf": "^2.5.1",
      "jspdf-autotable": "^3.7.1",
      "mongodb": "^6.16.0",
      "mongoose": "^8.13.2",
      "next": "15.3.0",
      "next-auth": "^4.24.11",
      "react": "^19.0.0",
      "react-dom": "^19.0.0",
      "react-hot-toast": "^2.5.2",
      "react-toastify": "^11.0.5",
      "xlsx": "^0.18.5"
    },
    "devDependencies": {
      "@eslint/eslintrc": "^3",
      "@tailwindcss/postcss": "^4",
      "@types/file-saver": "^2.0.7",
      "@types/jspdf": "^1.3.3",
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      "@types/xlsx": "^0.0.35",
      "eslint": "^9",
      "eslint-config-next": "15.3.0",
      "tailwindcss": "^4",
      "typescript": "^5"
    }
  }`;
  const packageJson = JSON.parse(packageJsonContent);
  const appVersion = packageJson.version || "N/A";

  return <SettingsContent appVersion={appVersion} />;
}
  