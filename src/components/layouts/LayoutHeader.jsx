import { cn } from "@/lib/utils"

export default function LayoutHeader({ 
  title, 
  description, 
  children, 
  className 
}) {
  return (
    <div className={cn(
      "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 space-y-1">
          <h1 className="text-xl sm:text-2xl font-semibold leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-shrink-0">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}