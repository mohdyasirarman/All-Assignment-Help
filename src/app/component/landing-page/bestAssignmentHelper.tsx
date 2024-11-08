import Image from "next/image";
import Link from "next/link";

export default function BestAssignmentHelper() {
  const stats = [
    {
      number: "4 min",
      description: "Our average response time is 4 minutes",
    },
    {
      number: "98.3%",
      description: "Our support services got thumbs up 98.3%",
    },
  ];

  const security = [
    {
      title: "We are Mcafee safe. Your data is protected.",
      icon: "/static/images/security/mcafee.svg",
    },
    {
      title: "Security, confidentiality, and money back guaranteed!",
      icon: "/static/images/security/security.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Assignment Help - Best Assignment
          <br />
          Helpers Are Online
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <p className="text-gray-600">
            Whenever it becomes tough to manage the assignments in college,
            availing assignment help is a wise choice. Students often miss
            assignment submission deadlines and score low grades. That's exactly
            where assignment help online is useful. Allassignmenthelp.com has
            best assignment experts, who are capable of providing quality
            assignment help and writing services at low prices. First, you have
            to understand what is assignment help online assistance? Is it
            equivalent to assignment writing for you? Here is the answer. We do
            not write an assignment for you. You avail assistance from the
            chosen assignment experts to hone your research skills. You can use
            the custom written assignment solution as a reference material for
            your final writing. Moreover, you can also buy previously solved
            assignment solutions for your reference. We make an individual
            realize one&apos;s potential by mentoring and guiding through the
            process of online assignment help.
          </p>

          <p className="text-gray-600">
            Does not matter how much time you have, assignments are always due
            on short deadlines. Hence, completing assignment within the given
            time is possible with the assistance of an expert. Our assignment
            helpers work 24/7 to ensure timely delivery. Our assignment experts
            works hard to live up to the expectations and provide total peace of
            mind. Our{" "}
            <Link href="/australian-assignment-help" className="text-blue-600">
              australian assignment help
            </Link>{" "}
            assistance has minimum turnaround time. If you are running out of
            time to turn in your assignment, hire an online assignment writer on
            allassignmenthelp.com.
            <br />
            <br />
            Our fundamental of working is{" "}
            <span className="font-bold">ASAP</span>, which means Affordability,
            Plagiarism free solution, Availability, and Professionalism. Our
            proclivity for this concept of ASAP makes us different from the rest
            of the assignment help service providers. Our custom assignment help
            works on the model of understanding the concepts and applying to
            prepare a better assignment solution.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-[#1e88e5] mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}

          {security.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mr-3"
              />
              <p className="text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
