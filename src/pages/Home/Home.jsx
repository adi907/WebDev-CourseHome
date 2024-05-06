import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

import courseData from "./courseData.json";

const Home = () => {

    let titles = [
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJS",
        "MongoDB",
        "Minor Projects",
    ]

    let deployedProjects = [
        { name: "Urban Haven", link: "https://urbanhaven.powerappsportals.com/" },
        { name: "Typing Speed Tester", link: "https://typetester.powerappsportals.com/" },
        { name: "Portfolio Website", link: "http://adi907.github.io/AdityaSharma/" },
        { name: "Arthagrahana", link: "https://arthagrahana.com/" },
        { name: "DSN Legal", link: "https://dsnlegal.com/" },
        { name: "News Data Analysis Dashboard", link: "https://news-dashboard-frontend.vercel.app/" },
    ]

    return (
        <>
            <section className="p-[5%]">

                {courseData.map((course, index) => (
                    <div key={index}>
                        <div
                            className="relative flex flex-col py-2 w-full"
                        >

                            <h2 className="font-bold text-2xl px-3 sm:px-10 mt-8 max-w-7xl text-center mx-auto">
                                {titles[index]}
                            </h2>

                            <div className="w-full h-full p-3 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">

                                {course.map((lecture, i) => (
                                    <Card
                                        key={i}
                                        className="bg-deep-blue"
                                    >

                                        <CardTitle className="text-center p-5 mx-[2%] md:py-8 text-gold font-semibold text-xl">
                                            <Link to={`${lecture.link}`}>
                                                {lecture.title}
                                            </Link>
                                        </CardTitle>

                                    </Card>
                                ))}

                            </div>

                        </div>

                        <Separator />
                        </div>
                ))}

                <div className="relative flex flex-col py-2 w-full">

                    <h2 className="font-bold text-2xl px-3 sm:px-10 mt-8 max-w-7xl text-center mx-auto">
                        Deployed Projects
                    </h2>

                    <div className="w-full h-full p-3 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">

                        {deployedProjects.map((project, index) => (
                            
                                <Card
                                    key={index}
                                    className="bg-deep-blue"
                                >

                                    <CardTitle className="text-center p-5 mx-[2%] md:py-8 text-gold font-semibold text-xl">
                                        <Link to={`${project.link}`}>
                                            {project.name}
                                        </Link>
                                    </CardTitle>

                                </Card>

                        ))}
                    </div>

                </div>



            </section>
        </>

    )
}

export default Home;