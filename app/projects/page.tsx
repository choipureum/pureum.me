export default function Projects() {
  const projects = [
    {
      title: "프로젝트 1",
      description: "첫 번째 프로젝트에 대한 설명입니다.",
      tech: ["React", "TypeScript", "Next.js"],
      link: "#",
    },
    {
      title: "프로젝트 2",
      description: "두 번째 프로젝트에 대한 설명입니다.",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">프로젝트</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          제가 작업한 프로젝트들을 소개합니다.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium">
                자세히 보기 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
