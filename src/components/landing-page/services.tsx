// import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const stats = [
    {
      number: "3 Hours",
      description: "We can do your assignment in 3 hours as well",
    },
    {
      number: "90%",
      description: "Our recurring clients asking us to do assignments",
    },
    {
      number: "400",
      description: "Number of custom assignments we write daily",
    },
    {
      number: "4.9",
      description: "Rating for our assignment help service",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Assignment Help Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Online Assignment Help</h3>
            <p className="text-gray-600 mb-8">
              Allassignmenthelp.com helps you to stay at the top of the class
              with online assignment help. The reason we have been the go to
              place for urgent assignment help is our pool of finest assignment
              writing experts from Australia for all academic assignments. Our
              assignment helpers have great writing skills and run a
              comprehensive assignment check to provide you with a custom online
              assignment help. Our assignment writers are best academic experts.
            </p>

            <h3 className="text-xl font-bold mb-4">
              Custom Essay Writing Help
            </h3>
            <p className="text-gray-600 mb-8">
              Writing an essay in college is more like a daily job.
              Allassignmenthelp.com not only help you achieve a desired grade on
              an essay, but also help you understand how to write a custom
              essay. You acquire the right knowledge and skill to keep producing
              great essays during your college stay. Our assignment helpers
              ensures that your essay is free from plagiarism meeting the
              university top grade criteria. We never miss the deadlines making
              us fast essay writing service provider.
            </p>

            <h3 className="text-xl font-bold mb-4">
              Programming Assignment Help
            </h3>
            <p className="text-gray-600">
              Programming assignments can be a nightmare due to the complexity,
              algorithms and lack of hands on experience. Our programming
              experts provide a detailed working{" "}
              <Link
                href="/programming-assignment-help"
                className="text-blue-600"
              >
                programming assignment help
              </Link>
              . You get the working snapshots of the code, code comments and
              much to understand how to write a program and achieving the
              programming knowledge. Programming help from allassignmenthelp.com
              is most sought out service in the US and Australia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Dissertation and Thesis Writing Help
            </h3>
            <p className="text-gray-600 mb-8">
              Dissertation and thesis decides on your degree grade and a lot
              more about your professional life. Hence, keeping the importance
              in mind, allassignmenthelp.com provides you with the best
              dissertation writing service. We incorporate both primary and
              secondary data required to produce a first class dissertation. Our
              dissertation writing expert utilized the right quantitative
              analysis tool to analyse the dissertation methodology and
              important sections.
            </p>

            <h3 className="text-xl font-bold mb-4">
              Other Online Writing Services
            </h3>
            <p className="text-gray-600 mb-8">
              Apart from being the best online assignment help and essay writing
              website, allassignmenthelp.com can help you with a myriad of
              assignments from various disciplines. If you have an online exam
              due, allassignmenthelp.com can help. You can ask us to assist you
              with homework, coursework, case studies, research paper writing,
              proofreading and editing services. Your assignment and our
              expertise can help you go a long way in your academics.
            </p>

            <h3 className="text-xl font-bold mb-4">
              Accounting and Finance Homework Help
            </h3>
            <p className="text-gray-600">
              You can ask us to do your accounting and finance homework. Our{" "}
              <Link
                href="/accounting-assignment-help"
                className="text-blue-600"
              >
                accounting assignment help
              </Link>{" "}
              covers all niche topics related to accounting, advanced accounting
              and much more. If you are bothered about your understanding
              towards number crunching to do a finance assignment, you just say
              &quot;do my accounting homework&quot; and we are online to help
              you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-[#1e88e5] mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
