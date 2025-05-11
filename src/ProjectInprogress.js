import React from "react";
import {
  FaTools,
  FaReact,
  FaRobot,
  FaExternalLinkAlt,
  FaCube,
  FaUserCog,
} from "react-icons/fa";
import { SiTailwindcss, SiThreedotjs } from "react-icons/si";

export const ProjectInprogress = () => {
  const projects = [
    {
      id: 1,
      title: "MyBoutique - AI Tailoring Platform (In Progress)",
      status: "Active Development",
      description: [
        "Transforming my father's tailoring business with:",
        "✅ LIVE: AI blouse pattern generator from text/image inputs",

        "Complete website with Services, Gallery, Measurement Guide",
        "🛠️ In Development: 2D-to-3D garment conversion system",
        "Future: User accounts + online ordering",
      ],
      tech: [
        { icon: <FaReact className="text-blue-400" />, name: "React.js" },
        {
          icon: <SiTailwindcss className="text-cyan-400" />,
          name: "Tailwind CSS",
        },
        {
          icon: <FaRobot className="text-purple-400" />,
          name: "Stable Diffusion API",
        },
        {
          icon: <FaCube className="text-amber-400" />,
          name: "ModelViewer API",
        },
        {
          icon: <FaUserCog className="text-green-400" />,
          name: "Firebase Auth",
        },
      ],
      features: [
        {
          title: "AI Pattern Generator",
          description: "Currently live in prototype - generates designs from:",
          details: [
            "📝 Text prompts ('Floral Kerala style blouse')",
            "🖼️ Uploaded inspiration images",
            "🎨 Custom color/embroidery inputs",
          ],
          status: "Implemented",
          icon: <FaRobot className="text-purple-400" />,
        },
        {
          title: "3D Design Preview",
          description: "Under development - will allow:",
          details: [
            "🔄 360° view of generated designs",
            "📏 Virtual measurement validation",
            "👗 Fabric drape simulation",
          ],
          status: "Building",
          icon: <FaCube className="text-amber-400" />,
        },
      ],
      url: "https://vineethkumar12.github.io/myboutique/",
      progress: 60,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            AI Tailoring Innovations
          </h2>
          <p className="text-gray-400 mt-3">
            Where traditional craftsmanship meets AI
          </p>
        </div>

        {/* Project Card */}
        <div
          className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/30 transition-all"
          data-aos="fade-up"
        >
          {/* Title + Link */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {projects[0].title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-400/20 text-yellow-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                  {projects[0].status}
                </span>
                <span className="text-xs text-gray-400">
                  Progress: {projects[0].progress}%
                </span>
              </div>
            </div>
            <a
              href={projects[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 rounded-lg text-yellow-400 transition-colors"
            >
              Try AI Generator <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 h-2.5 rounded-full overflow-hidden mb-8">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-full rounded-full transition-all duration-1000"
              style={{ width: `${projects[0].progress}%` }}
            ></div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {projects[0].tech.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-cyan-400 transition-colors"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Project Description */}
          <ul className="space-y-3 mb-8 pl-2">
            {projects[0].description.map((item, i) => (
              <li key={i} className="text-gray-300 flex items-start">
                <span
                  className={`mt-1 mr-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600`}
                >
                  {item.match(/^[✅🛠️🔜]/) ? " " : "▹"}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Feature Highlights */}
          <div className="mt-8">
            <h4 className="text-lg font-medium text-white mb-4">
              Technical Highlights
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {projects[0].features.map((feature, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-400/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        feature.status === "Implemented"
                          ? "bg-green-400/10"
                          : "bg-amber-400/10"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-white">
                        {feature.title}
                      </h5>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          feature.status === "Implemented"
                            ? "bg-green-400/10 text-green-400"
                            : "bg-amber-400/10 text-amber-400"
                        }`}
                      >
                        {feature.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    {feature.description}
                  </p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    {feature.details.map((detail, j) => (
                      <li key={j} className="flex">
                        <span className="mr-2">{detail.split(" ")[0]}</span>
                        <span>{detail.substring(detail.indexOf(" ") + 1)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/vineethkumar12/myboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all border border-gray-600 hover:border-yellow-400 text-yellow-400"
          >
            <FaReact className="mr-2" /> View React Source Code
          </a>
        </div>
      </div>
    </section>
  );
};
