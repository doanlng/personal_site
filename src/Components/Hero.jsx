import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    return (
        <div className="absolute right-1/3 align-middle top-96 max-w-[375px]:w-max max-w-[375px]:flex" >
            <div className="font-bold text-white md:text-9xl max-w-[375px]:text-4xl max-w-[375px]:w-max max-w-[375px]:justify-center">
                <TypeAnimation 
                    cursor={true}
                    sequence={[
                        "Hello",
                        500,
                        "Howdy",
                        500,
                        "Hi,",
                        500,
                        "Hi, I'm Grant"
                    ]}
                    wrapper="span"
                    speed={1.2}
                />
            </div>
            <div className="inline-block text-white text-3xl max-w-lg  max-w-[375px]:justify-center">
                <TypeAnimation 
                cursor={false}
                    sequence={[
                        5000,
                        "A work-in-progress full stack developer driven by code and curiousity."
                    ]}
                    wrapper="span"
                    speed={2}
                />
            </div>
        </div>
    );
}

export default Hero;