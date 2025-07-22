import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

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

const ChartContext = React.createContext(null)

function ChartContainer({
  config,
  children,
  className,
  ...props
}) {
  const { config: computedConfig } = useChart({ config })

  return (
    <ChartContext.Provider value={{ config: computedConfig }}>
      <div
        data-chart=""
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line-line]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef(
  ({ active, payload, className, indicator = "dot", label, labelFormatter, labelClassName, formatter, hideLabel = false, hideIndicator = false }, ref) => {
    const { config } = React.useContext(ChartContext)

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      return payload[0].payload
    }, [hideLabel, payload])

    if (!active || !payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!hideLabel && (
          <div className={cn("flex items-center gap-1.5", labelClassName)}>
            {!hideIndicator && (
              <div
                className={cn("h-2.5 w-2.5 shrink-0 rounded-full bg-muted", {
                  "h-0.5 w-4": indicator === "line",
                  "size-1": indicator === "dashed",
                })}
                style={{
                  borderStyle: indicator === "dashed" ? "dashed" : "solid",
                  borderWidth: indicator === "dashed" ? 1 : 0,
                }}
              />
            )}
            <span className="font-medium text-foreground">
              {labelFormatter?.(label, payload) ?? label}
            </span>
          </div>
        )}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const itemConfig = config[item.dataKey]
            const value = formatter?.(item.value, item.name) ?? item.value

            return (
              <div key={index} className="flex items-center gap-1.5">
                {!hideIndicator && (
                  <div
                    className={cn("h-2.5 w-2.5 shrink-0 rounded-full", {
                      "h-0.5 w-4": indicator === "line",
                      "size-1": indicator === "dashed",
                    })}
                    style={{
                      backgroundColor: item.color || itemConfig?.color,
                      borderStyle: indicator === "dashed" ? "dashed" : "solid",
                      borderWidth: indicator === "dashed" ? 1 : 0,
                    }}
                  />
                )}
                <span className="text-muted-foreground">
                  {itemConfig?.label || item.name}:
                </span>
                <span className="font-medium text-foreground">{value}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef(
  ({ className, payload }, ref) => {
    const { config } = React.useContext(ChartContext)

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-4", className)}
      >
        {payload.map((item, index) => {
          const itemConfig = config[item.dataKey]

          return (
            <div key={index} className="flex items-center gap-1.5">
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: item.color || itemConfig?.color }}
              />
              <span className="text-xs text-muted-foreground">
                {itemConfig?.label || item.value}
              </span>
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegendContent"

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
}