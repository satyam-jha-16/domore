import { BotIcon, SettingsIcon, HeartPulseIcon, LayoutGridIcon, NotepadTextIcon, StethoscopeIcon, UserRound, TouchpadOff } from "lucide-react";

export const LINKS = [
    {
        label: "Designs",
        href: "/dashboard",
        icon: LayoutGridIcon,
    },
    {
        label: "To Do List",
        href: "/dashboard/todoist",
        icon: NotepadTextIcon,
    },
    {
        label: "Summary",
        href: "/dashboard/summary",
        icon: StethoscopeIcon,
    },
    {
        label: "AI Chat",
        href: "/dashboard/ai",
        icon: BotIcon,
    },

] as const;
