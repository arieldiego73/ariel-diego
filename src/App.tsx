import "./App.css";
import { ModeToggle } from "@/components/mode-toggle";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CustomSidebarTrigger } from "./components/sidebar/custom-sidebar-trigger";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { TabsContent, TabsTrigger } from "@/components/ui/tabs";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const defaultSelectedTab = "about";
const tabs = [
  {
    value: "about",
    label: "About",
    content: <About />,
  },
  {
    value: "resume",
    label: "Resume",
    content: <Resume />,
  },
  {
    value: "portfolio",
    label: "Portfolio",
    content: <Portfolio />,
  },
  {
    value: "blog",
    label: "Blog",
    content: <Blog />,
  },
  {
    value: "contact",
    label: "Contact",
    content: <Contact />,
  },
];

function App() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "var(--sidebar-custom-width)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="floating"></AppSidebar>
      <SidebarInset>
        <Tabs
          defaultValue={defaultSelectedTab}
          className="flex flex-col justify-center items-center relative"
        >
          <TabsList
            loop
            className="bg-sidebar shadow-md rounded-lg grid w-auto grid-cols-7 sticky top-0 p-1.5 gap-1"
          >
            <div className="bg-background rounded-md mr-3">
              <CustomSidebarTrigger className="-ml-1" />
              <ModeToggle />
            </div>
            <Separator orientation="vertical" decorative />
            {tabs.map((tab) => (
              <TabsTrigger
                className="transition-all duration-200 hover:ring-0 hover:ring-ring/50 hover:bg-white dark:hover:ring-1 dark:hover:ring-ring/50 dark:hover:bg-input/30"
                value={tab.value}
                children={tab.label}
              />
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              value={tab.value}
              className="border-none p-0 outline-none w-full mt-12"
            >
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
