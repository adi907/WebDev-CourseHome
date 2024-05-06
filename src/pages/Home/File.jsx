import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import courseData from "./courseData.json";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

import fs from 'fs';
import path from "path";



const DynamicHTMLRenderer = ({ filePath }) => {
    const [htmlContent, setHtmlContent] = useState('');
  
    // useEffect(() => {
    //   import(`../../../${filePath}`)
    //     .then(response => {response.default})
    //     .then(html => setHtmlContent(html))
    //     .catch(error => console.error('Error loading file:', error));
    // }, [filePath]);

    useEffect(() => {
        const fetchHTMLContent = async () => {
          try {
            const response = await fetch(`../../../${filePath}`);
            if (!response.ok) {
              throw new Error('Failed to fetch HTML content');
            }
            const html = await response.text();
            setHtmlContent(html);
          } catch (error) {
            console.error('Error loading HTML file:', error);
          }
        };
    
        fetchHTMLContent();
      }, [filePath]);
  
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

const File = () => {
    const { fileName } = useParams();

    let file;
    courseData.find((courses)=> {
        file= courses.find((lecture) =>  lecture.link === fileName); 
        return file;
    })

    // console.log(file);


    return(
        <>
            <section className="p-[5%]">

                <div className="relative flex flex-col py-2 w-full">

                    <h2 className="font-bold text-2xl px-3 sm:px-10 mt-8 max-w-7xl text-center mx-auto my-5">
                        {file.subject}
                    </h2>
                    

                    <Card>
                        <CardTitle className="text-center p-5 mx-[2%] md:py-8 text-gold font-semibold text-xl">
                            {file.title}
                        </CardTitle>
                        <CardFooter>{file.link}</CardFooter>

                        <DynamicHTMLRenderer filePath={`${file.subject}/${file.link}`} />
                    </Card>



                </div>


            </section>
        </>
    )
}

export default File;