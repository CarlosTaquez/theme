"use client";

import { useState } from "react";
import {
  Sparkles,
  Play,
  Image,
  Check,
  Monitor,
  Sun,
  Moon,
} from "lucide-react";
import "./globals.css";

export default function AppearancePage() {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("purple");
  const [reduceMotion, setReduceMotion] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [highQuality, setHighQuality] = useState(false);

  const colors = ["red", "yellow", "green", "purple", "pink"];

  return (
    <div className="page-wrapper">
      <div className="settings-card">
        <h1 className="title">Appearance</h1>
        <p className="subtitle">
          Set or customize your preferences for the system
        </p>

        <div className="divider" />

        {/* Language */}
        <div className="section">
          <div>
            <h2 className="section-title">Language</h2>
            <p className="section-description">
              Select the language of the platform
            </p>
          </div>
          <select className="select">
            <option>English</option>
          </select>
        </div>

        {/* Interface Theme */}
        <div className="section column">
          <div>
            <h2 className="section-title">Interface theme</h2>
            <p className="section-description">
              Customize your application appearance
            </p>
          </div>

          <div className="theme-options">
            <ThemeCard
              icon={<Monitor size={20} />}
              label="Auto"
              value="auto"
              selected={theme}
              setSelected={setTheme}
            />
            <ThemeCard
              icon={<Sun size={20} />}
              label="Light"
              value="light"
              selected={theme}
              setSelected={setTheme}
            />
            <ThemeCard
              icon={<Moon size={20} />}
              label="Dark"
              value="dark"
              selected={theme}
              setSelected={setTheme}
            />
          </div>
        </div>

        {/* Accent Color */}
        <div className="section column">
          <div>
            <h2 className="section-title">Accent color</h2>
            <p className="section-description">
              Pick your platform's main color
            </p>
          </div>

          <div className="color-options">
            {colors.map((color) => (
              <div
                key={color}
                className={`color ${color} ${
                  accent === color ? "active" : ""
                }`}
                onClick={() => setAccent(color)}
              >
                {accent === color && <Check size={14} />}
              </div>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <ToggleRow
          icon={<Sparkles size={18} />}
          label="Reduce motion"
          state={reduceMotion}
          setState={setReduceMotion}
        />

        <ToggleRow
          icon={<Play size={18} />}
          label="Auto play"
          state={autoPlay}
          setState={setAutoPlay}
        />

        <ToggleRow
          icon={<Image size={18} />}
          label="High quality photo"
          state={highQuality}
          setState={setHighQuality}
        />

        <div className="divider" />

        <div className="footer">
          <button className="btn cancel">Cancel</button>
          <button className="btn primary">Save Preferences</button>
        </div>
      </div>
    </div>
  );
}

function ThemeCard({
  icon,
  label,
  value,
  selected,
  setSelected,
}: any) {
  const isActive = selected === value;

  return (
    <div
      className={`theme-card ${isActive ? "active" : ""}`}
      onClick={() => setSelected(value)}
    >
      <div className="theme-preview">
        {isActive && (
          <div className="check-badge">
            <Check size={14} />
          </div>
        )}
      </div>
      <div className="theme-label">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
}

function ToggleRow({ icon, label, state, setState }: any) {
  return (
    <div className="toggle-row">
      <div className="toggle-left">
        {icon}
        <span>{label}</span>
      </div>
      <div
        className={`toggle ${state ? "active" : ""}`}
        onClick={() => setState(!state)}
      />
    </div>
  );
}