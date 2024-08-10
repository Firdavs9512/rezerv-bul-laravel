import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{ts,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: {
                    light: "#E0F2F1",
                    DEFAULT: "#00594F",
                    dark: "#004D44",
                },

                secondary: {
                    light: "#FFCCBC",
                    DEFAULT: "#FF5722",
                    dark: "#E64A19",
                },
            },
        },
    },

    plugins: [forms],
};
