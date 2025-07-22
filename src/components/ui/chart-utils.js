import * as React from "react"
import * as RechartsPrimitive from "recharts"

// Format: { THEME_NAME: CSS_VARIABLE_NAME }
const THEMES = { light: "", dark: ".dark" }

export function useChart({ config }) {
  const [theme] = React.useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  )

  const computedConfig = React.useMemo(() => {
    let foundTheme = theme
    const themeConfig = Object.entries(THEMES).find(([themeName]) =>
      document.documentElement.classList.contains(themeName)
    )
    if (themeConfig) {
      foundTheme = themeConfig[0]
    }

    return Object.entries(config).reduce((acc, [key, value]) => {
      if (typeof value === "string") {
        acc[key] = {
          ...acc[key],
          color: `hsl(${value})`,
        }
      } else {
        acc[key] = {
          ...acc[key],
          ...value,
          ...(value.theme?.[foundTheme] ?? {}),
        }
      }
      return acc
    }, {})
  }, [config, theme])

  return { theme, config: computedConfig }
}