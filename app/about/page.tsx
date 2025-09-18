export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">소개</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          저에 대해 알아보세요.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">안녕하세요! 👋</h2>
          <p className="text-gray-600 mb-6">
            저는 개발자 최푸름입니다. 웹 개발과 기술에 대한 열정을 가지고 있으며, 지속적으로
            학습하고 성장하고 있습니다.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">기술 스택</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-900">Frontend</h4>
              <p className="text-sm text-blue-700">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-green-900">Backend</h4>
              <p className="text-sm text-green-700">Node.js, Python, Go</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-medium text-purple-900">Database</h4>
              <p className="text-sm text-purple-700">PostgreSQL, MongoDB</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">연락처</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>이메일:</strong> contact@pureum.me
            </p>
            <p className="text-gray-600">
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/pureum" className="text-blue-600 hover:text-blue-800">
                github.com/pureum
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
