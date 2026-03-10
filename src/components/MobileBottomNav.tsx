import { useLocation, useNavigate } from "react-router-dom";
import { Home, Wrench, Users, Mail } from "lucide-react";

const tabs = [
  { label: "Home", path: "/", icon: Home },
  { label: "Services", path: "/services", icon: Wrench },
  { label: "About", path: "/about", icon: Users },
  { label: "Contact", path: "/contact", icon: Mail },
];

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const active = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-1 min-w-[60px] transition-colors"
            >
              {active && <div className="w-1 h-1 rounded-full bg-amber absolute -top-0" />}
              <tab.icon className={`w-5 h-5 ${active ? "text-amber" : "text-muted-foreground"}`} />
              <span className={`text-[10px] font-body ${active ? "font-bold text-amber" : "text-muted-foreground"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
