// tailwind.config.ts
import { type Config } from "tailwindcss"
// @ts-ignore
import { fontFamily } from "tailwindcss/defaultTheme"

// @ts-ignore
const config: Config = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            colors: {
                // 필요시 색상 확장
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"), // shadcn 애니메이션
    ],
}

export default config
