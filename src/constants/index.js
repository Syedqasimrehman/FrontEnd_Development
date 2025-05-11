import {
  logo_devlens,
  logo_console_plus,
  logo_dom_snapshot,
  logo_grid_guides,
  logo_json_wizard,
  logo_link_checker,
  logo_markup_notes,
  logo_palette_picker,
  logo_tab_master_pro,
  logo_speed_boost,
  logo_viewport_buddy,
  logo_style_spy,
} from "../assets/images";

export const cards = [
  {
    id: 1,
    logo: logo_devlens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    id: 2,
    logo: logo_style_spy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: 3,
    logo: logo_speed_boost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: 4,
    logo: logo_json_wizard,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    id: 5,
    logo: logo_tab_master_pro,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: 6,
    logo: logo_viewport_buddy,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 7,
    logo: logo_markup_notes,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: 9,
    logo: logo_grid_guides,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: 10,
    logo: logo_palette_picker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: 11,
    logo: logo_link_checker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    id: 12,
    logo: logo_dom_snapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: 13,
    logo: logo_console_plus,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
