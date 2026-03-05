import React from "react";
import "./GitHubStats.scss";

const GitHubStats = ({ username = "andrespereira" }) => {
  return (
    <div className="github-stats">
      <h3 className="stats-title">Actividad en GitHub</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=1a1a1a&title_color=00d9ff&icon_color=7c3aed&text_color=a0a0a0`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </div>
        <div className="stat-card">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=1a1a1a&title_color=00d9ff&text_color=a0a0a0`}
            alt="Top Languages"
            loading="lazy"
          />
        </div>
        <div className="stat-card streak">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=1a1a1a&ring=00d9ff&fire=7c3aed&currStreakLabel=00d9ff`}
            alt="GitHub Streak"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
