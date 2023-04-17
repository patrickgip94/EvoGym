import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "EVOGYM boasts state-of-the-art fitness facilities equipped with the latest technology and equipment to provide an unparalleled workout experience.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "EVOGYM's expert trainers provide personalized guidance to help you achieve your fitness goals and maximize your workout results.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "With hundreds of diverse classes, EVOGYM offers a wide range of fitness programs designed to cater to all levels and interests.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER SECTION*/}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            EVOGYM is more than just a gym - it's a community dedicated to
            helping you live a healthier, more fulfilling life. In addition to
            providing top-notch fitness facilities and personalized training,
            EVOGYM offers a range of social events, wellness programs, and
            nutritional guidance to support your overall well-being. Whether
            you're looking to make new friends, improve your health, or simply
            feel your best, EVOGYM is the perfect place to do it all.
          </p>
        </motion.div>

        {/* BENEFITS SECTION*/}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphics"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE  */}
            <div className="relative">
              <div
                className="before:absolute before:-left-20 before:-top-20 before:z-[-1] 
                before:content-abstract"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                At EVOGYM, the satisfaction of our members is our top priority,
                and there's nothing more fulfilling than seeing our happy
                members achieve their fitness goals. With our state-of-the-art
                facilities, diverse range of classes, and expert trainers, we're
                committed to providing an exceptional fitness experience that
                exceeds our members' expectations.
              </p>
              <p className="mb-5 ">
                From weight loss to strength training, our members have seen
                tremendous results, and we're proud to have played a part in
                their fitness journey. Whether it's through one-on-one training
                sessions or group classes, our trainers are dedicated to helping
                our members reach their full potential, and we're thrilled to
                see them come out of their shell and push their limits. Seeing
                our members feeling more energized, confident, and empowered is
                the greatest reward, and we strive to continue providing a
                supportive community that fosters growth, progress, and
                happiness.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div
                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] 
              before:content-sparkles"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  {" "}
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
