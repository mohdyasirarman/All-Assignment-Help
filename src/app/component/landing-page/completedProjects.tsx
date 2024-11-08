import Image from "next/image";

export default function CompletedProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Blue Background */}
          <div className="bg-[#1e88e5] text-white p-12 rounded-lg">
            <div className="max-w-md">
              <div className="w-16 h-1 bg-white mb-8"></div>
              <h2 className="text-4xl font-bold mb-6">
                Recent Completed Projects
              </h2>
              <p className="text-lg opacity-90">
                You can look at some of the samples that we did recently, we
                strongly recommend not to use samples for writing your
                assignment.
              </p>
            </div>
          </div>

          {/* Right Column - Project Sample */}
          <div className="flex items-center justify-center">
            <Image
              src="/static/images/projects/sample.svg"
              alt="Project Sample"
              width={400}
              height={400}
              className="max-w-full"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="p-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
            ←
          </button>
          <button className="p-2 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
