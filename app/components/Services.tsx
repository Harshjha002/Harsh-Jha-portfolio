

const services = [
    {
        id: "01",
        title: "Frontend Development",
        description:
            "Building responsive and interactive user interfaces using React, JavaScript, and Tailwind CSS."
    },
    {
        id: "02",
        title: "Backend Development",
        description:
            "Creating scalable backend systems and REST APIs using Java, Spring Boot, and Hibernate."
    },
    {
        id: "03",
        title: "Database Management",
        description:
            "Designing and managing databases with MySQL, MongoDB, and Redis for high performance applications."
    },
    {
        id: "04",
        title: "Cloud & DevOps",
        description:
            "Deploying and managing applications using AWS, Docker, GitHub Actions, and Linux environments."
    },
    {
        id: "05",
        title: "API Testing & Integration",
        description:
            "Testing, debugging, and integrating APIs efficiently using Postman and modern backend tools."
    },
    {
        id: "06",
        title: "Full Stack Web Applications",
        description:
            "Developing complete full stack applications with modern frontend, backend, and deployment workflows."
    }
];

const Services = () => {



    return (
        <div className="container mx-auto flex  flex-col md:flex-row">
            <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                <h2 className="text-6xl font-extrabold sticky top-20">
                    What I Build
                </h2>
            </div>
            <div className="md:w-3/4">
                {services.map((service) => (
                    <div key={service.id} className="mb-16 flex items-start">
                        <div className="text-gray-300 font-bold text-5xl mr-6">
                            {service.id}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services