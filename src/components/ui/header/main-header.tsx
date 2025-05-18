import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import { useTheme } from '@/components/theme-provider/theme-provider'
import { ModeToggle } from '@/components/ui/theme-mode-toggle'

export const MainHeader = () => {
  const { theme } = useTheme()
  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'

  return (
    <header className="w-full bg-background box-border">
      <div className="flex items-center justify-between px-4 box-border w-full">
                 
      <div className="flex items-center space-x-4 min-w-0">
        <img
            src={logoSrc}
            alt="Ditto Logo"
            className="h-8 w-8 flex-shrink-0 max-w-full"
          />
          <h1 className="font-kairos text-xl font-medium truncate">
            Ditto Edge Client
          </h1>
        </div>

	<div className="flex items-center space-x-4 min-w-0 flex-shrink-0 max-w-full overflow-hidden">
          <a
            href="https://docs.ditto.live/home/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="font-kairos text-foreground hover:text-primary transition-colors min-w-0 truncate"
          >
            Docs
          </a>
          <a
            href="https://portal.ditto.live"
            target="_blank"
            rel="noopener noreferrer"
            className="font-kairos text-foreground hover:text-primary transition-colors min-w-0 truncate"
          >
            Portal
          </a>
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 min-w-0 flex-shrink-0 overflow-hidden"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
