"use client";

type Theme = "notion" | "discord" | "spotify" | "windows98";

const themes = [
  { value: "notion", label: "Notion" },
  { value: "discord", label: "Discord" },
  { value: "spotify", label: "Spotify" },
  { value: "windows98", label: "Windows 98" },
];

interface Win98ThemeSwitcherProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export default function Win98ThemeSwitcher({
  theme,
  onChange,
}: Win98ThemeSwitcherProps) {
  return (
    <div className="relative h-8 w-[180px]">
      <select
        value={theme}
        onChange={(e) => onChange(e.target.value as Theme)}
        className="
          appearance-none
          w-full
          bg-white
          text-black
          px-2
          py-1
          pr-8
          text-sm
          rounded-none
          outline-none

          border-t-2 border-l-2
          border-r-2 border-b-2

          border-t-[#808080]
          border-l-[#808080]

          border-r-white
          border-b-white
        "
      >
        {themes.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>

      {/* Win98 arrow button */}
      <div
        className="
    absolute
    top-[2px]
    right-[2px]
    bottom-[2px]
    w-6

    bg-[#c0c0c0]

    border-t-2 border-l-2
    border-r-2 border-b-2

    border-t-white
    border-l-white
    border-r-[#808080]
    border-b-[#808080]

    shadow-[inset_1px_1px_0_#dfdfdf,inset_-1px_-1px_0_#404040]

    flex
    items-center
    justify-center

    pointer-events-none
  "
      >
        <div
          className="
      w-0
      h-0
      border-l-[4px]
      border-r-[4px]
      border-t-[5px]
      border-l-transparent
      border-r-transparent
      border-t-black
      translate-y-[1px]
    "
        />
      </div>
    </div>
  );
}
