import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

type InputType = "password" | "text" | "file"

const EyeIcon = ({ type }: { type: InputType }) => {
  const size = 20
  return type === "password" ? <EyeOff size={size} /> : <Eye size={size} />
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const beginningType = type as InputType
    const [currentType, setCurrentType] = React.useState<InputType>(beginningType)

    function handleClick() {
      setCurrentType(currentType === "password" ? "text" : "password")
    }

    return (
      <div className="flex flex-row w-full">
        <input
          type={currentType}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {beginningType === "password" && (
          <div className="ml-2">
            <Button type="button" size="icon" variant="ghost" onClick={handleClick}>
              <EyeIcon type={currentType} />
            </Button>
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
