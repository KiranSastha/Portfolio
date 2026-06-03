import { motion } from "framer-motion";

const USERNAME = "KiranSastha";

const GitHubStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
        GitHub Activity
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Stats card */}
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=f5c842&icon_color=f5c842&text_color=9ca3af&bg_color=00000000&count_private=true`}
            alt="GitHub Stats"
            className="w-full"
            loading="lazy"
          />
        </div>

        {/* Top languages card */}
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=f5c842&text_color=9ca3af&bg_color=00000000&langs_count=6`}
            alt="Top Languages"
            className="w-full"
            loading="lazy"
          />
        </div>

        {/* Streak card */}
        <div
          className="sm:col-span-2 rounded-xl border overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <img
            src={`https://streak-stats.demolab.com?user=${USERNAME}&theme=transparent&hide_border=true&stroke=f5c842&ring=f5c842&fire=f5c842&currStreakLabel=f5c842&sideLabels=9ca3af&dates=6b7280&background=00000000`}
            alt="GitHub Streak"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>

      <p className="text-xs text-gray-700 mt-3 text-center">
        Live data from{" "}
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          github.com/{USERNAME}
        </a>
      </p>
    </motion.div>
  );
};

export default GitHubStats;
