import Accordion from "./Accordion";

const Services = () => {
    return (
    <div id="services" className="flex  justify-center">
        <div className="w-full max-w-6xl flex-col pb-16 pl-16 pr-16">
        <div className="pb-2 font-light dark:text-white ml-8 mt-16 text-4xl">
            SERVICES
            <div className="w-56 border-hero-pink pb-2 border-b-2">

            </div>
        </div>
        <div className=" dark:text-white pr-16 md:mr-28 ml-8 font-light mt-4">
            Our goal is to make sure you have the best product possible, and that means working with you from the ground
            up. We&apos;ll work with your team or partner with you to give you the best solution for your product needs.
        </div>
        <div>
            <Accordion/>
        </div>
        </div>
    </div>)
}

export default Services;