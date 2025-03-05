import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import HeadingWithSub from "./shared/HeadingWithSub";
import { testimonials } from "@/data";

export function Testimonials() {

    return (
        <section className=" mt-20">
            <HeadingWithSub heading='What Clients Say'
                description='Explore the world&apos;s best & largest bidding marketplace with our
          beautiful bidding products. We want to be part of your smile, success,
          and future growth.' />
            <AnimatedTestimonials testimonials={testimonials} />
        </section>

    );

}
