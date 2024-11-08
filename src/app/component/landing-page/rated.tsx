import Image from "next/image";

export default function Rated() {
  const universities = [
    {
      name: "Monash University",
      logo: "/static/images/universities/monash.svg",
    },
    {
      name: "Federation University",
      logo: "/static/images/universities/federation.svg",
    },
    {
      name: "University of Wollongong",
      logo: "/static/images/universities/wollongong.svg",
    },
    {
      name: "University of Melbourne",
      logo: "/static/images/universities/melbourne.svg",
    },
    {
      name: "University of Sydney",
      logo: "/static/images/universities/sydney.svg",
    },
    {
      name: "University of South Australia",
      logo: "/static/images/universities/south-australia.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          We Are Rated Number 1 assignment help
          <br />
          writing company in Australia - Know why
          <br />
          students love our services
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {universities.map((university, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={university.logo}
                alt={university.name}
                width={140}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">
              Allassignmenthelp.com has been a leader in academic writing
              service leader for five years now. There are several reasons that
              take us right to the top position when it comes to assignment help
              online. Either it is student trust, our quality score or our
              turnaround time to write a custom assignment solution, we are top
              class. Students from Australia are mostly international and their
              struggle with assignment writing is real. The language barrier,
              difficult course curriculum and part time jobs put students under
              huge stress. Hence, many university students in Australia avail
              our online assignment help service from the very first assignment.
              With our promising assignment quality, students keep coming back
              to us asking us to write their assignments and as a result we have
              more than 90% recurring students for assignment help in Australia.
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              Australia is an educational hub with home to many renowned
              universities. University of Sydney, Queensland University, the
              University of Adelaide, University of Melbourne are among the best
              universities in the world, hence meeting the guidelines and
              passing courseworks is an arduous task. Students have to attend
              regular classes, take class notes and write innumerous assignments
              to compete in the class. Students from the aforementioned
              universities availed assignment assistance from our professional
              assignment writers. We keep asking feedback on our online
              assignment writing service and it has been great. The evidence of
              us being the best online assignment help website is the 95%
              positive feedback on our assignment help service. Landing up in a
              dream job and scoring top-notch grade is no longer difficult with
              our service. It is why we are the most trusted assignment help
              company for assignment help in Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
