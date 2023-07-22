import SectionTitle from "../../../components/SectionTitle";

 
const Research = () => {
    return (
        <div>
            <SectionTitle heading="Research Papers"></SectionTitle>
            
                <div className="text-center my-10">
                <h2 className="text-2xl">Recommended Research Papers</h2>
                <p>Check out these research papers recommended by college students:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                    <a className="bg-black text-white py-10" href="https://www.iresearchnet.com/research-paper-examples/education-research-paper/early-childhood-education/"><img src="" alt="" /> <p className="text-xl ps-5">Early Childhood Education Research Paper</p> </a>
                    <div className=" text-white py-10"></div>
                    <div  className=" text-white md:py-10"></div>
                    <a className="bg-black text-white py-10" href="https://www.iresearchnet.com/research-paper-examples/education-research-paper/information-processing/"><img src="" alt="" /> <p className="text-xl ps-5">Information Processing Research Paper</p> </a>


                    <a className="bg-black text-white mt-20 md:mt-0 py-10" href="https://www.iresearchnet.com/research-paper-topics/education-research-paper-topics/multicultural-education/"><img src="" alt="" /> <p className="text-xl ps-5">Multicultural Education Research Paper Topics</p> </a>
                    <div className=" text-white py-10"></div>
                    <div  className=" text-white md:py-10"></div>
                    <a className="bg-black text-white py-10" href="https://www.iresearchnet.com/research-paper-examples/education-research-paper/special-education/"><img src="" alt="" /> <p className="text-xl ps-5">Special Education Research Paper</p> </a>
                </div>
           
        </div>
    );
};

export default Research;