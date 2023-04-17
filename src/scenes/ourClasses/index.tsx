import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "EVOGYM's Weight Training Classes, led by expert trainers, cater to all levels and use free weights, machines, or bodyweight exercises to build strength, increase muscle mass, and improve overall fitness.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "EVOGYM's Yoga classes, led by experienced instructors, cater to all levels and offer a variety of styles, from gentle Hatha to dynamic Vinyasa. Whether you're a beginner or an experienced yogi, our classes provide a space to improve flexibility, reduce stress, and find inner peace.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "EVOGYM's Ab Core Classes, led by certified instructors, offer a challenging and effective workout for all levels, helping to strengthen and tone your core muscles.",
    image: image3,
  },
  {
    name: "Adventure Training Classes",
    description:
      "EVOGYM's Adventure Training Classes, led by experienced instructors, provide a unique way to stay fit while exploring the outdoors with a range of activities that challenge your body and mind.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "EVOGYM's Fitness Classes cater to all levels and provide a variety of workouts led by certified instructors, from HIIT to low-impact cardio and strength training, to help you reach your fitness goals.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "EVOGYM's Training Classes offer personalized workouts led by expert trainers to help you achieve your fitness goals, whether you're a beginner or an advanced athlete.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our expert trainers lead each class with passion and expertise,
              ensuring that you receive personalized attention and guidance to
              help you get the most out of every session. With a variety of
              class types and schedules, EVOGYM offers the flexibility and
              support you need to achieve your fitness goals on your own terms.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
