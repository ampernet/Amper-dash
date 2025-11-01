import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#2563eb',
                    light: '#3b82f6',
                    dark: '#1e40af',
                },
                secondary: {
                    DEFAULT: '#6b7280',
                    light: '#9ca3af',
                    dark: '#374151',
                },
                accent: {
                    DEFAULT: '#f59e0b',
                    light: '#fbbf24',
                    dark: '#b45309',
                },
                success: '#22c55e',
                warning: '#f97316',
                danger: '#ef4444',
                info: '#3b82f6',
            },
        },
    },

    plugins: [forms],
};
