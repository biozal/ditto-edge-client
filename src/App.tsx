import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider/theme-provider";
import { Button } from "@/components/ui/button";
import { MainHeader } from "@/components/ui/header/main-header";

const FontTest = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px', margin: '20px' }}>
      <h3>Font Test</h3>
      <p>This text is using the default font (should be Inter)</p>
      <p style={{ fontFamily: 'monospace' }}>This text is using IBM Plex Mono</p>
      <p className="font-kairos">This text is using Kairos Sans</p>
      <p className="font-inconsolata">This text is using Inconsolata</p>
      <p className="font-aeonik">This text is using Aeonik Pro</p>
      <p className="font-kairos" style={{ fontVariationSettings: "'wght' 100" }}>
        This text uses Kairos Sans Thin
      </p>
    </div>
  );
};

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <MainHeader />
      <div className="min-h-screen bg-background-DEFAULT text-foreground-normal">
        <div className="container mx-auto p-4">
          <h1 className="font-kairos-thin text-2xl font-bold">Theme Demo</h1>
          <div className="mt-4 space-x-2">
            <Button
              onClick={() => setTheme("light")}
              variant="inverted"
            >
              Light
            </Button>
            <Button
              onClick={() => setTheme("dark")}
              variant="inverted"
            >
              Dark
            </Button>
            <Button
              onClick={() => setTheme("system")}
              variant="inverted"
            >
              System
            </Button>
            <Button
             variant="inverted">
              New app +
            </Button>
          </div>
          <p className="mt-4">Current theme: {theme}</p>
        </div>
      </div>
    </>
  );
}

export default App;
