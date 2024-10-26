import { Container } from "@/components/Container";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Facebook } from "@/constants/social_media_logos";


export default function Team() {
  return (
    <Container>
      <section className="bg-white dark:bg-gray-900 pt-28">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Our dedicated team of social media experts and tech enthusiasts is passionate about simplifying your social media management.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image width={300} height={300} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={`/img/team/abhisek.jpg`} alt="Abhisekh Upadhaya" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Abhisekh Upadhaya</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Backend Developer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Abhisekh specializes in backend development, driving the technical backbone of Crontrack.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li className="flex justify-evenly w-[50%]">
                    <a href="https://www.facebook.com/abhisek.upadhaya.75" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Facebook size={20}/>
                    </a>
                    <a href="https://www.instagram.com/abhisekupa" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Instagram size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/abhisekh-upadhaya/" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Linkedin size={20}/>
                    </a>
                    <a href="https://x.com/AbhisekUpadhay5" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Twitter size={20}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image width={300} height={300} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={"/img/team/rahul_kumar.png"} alt="Rahul Kumar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Rahul Kumar</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Frontend Developer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Rahul brings Crontrack's vision to life with a dynamic and user-friendly interface.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li className="flex justify-evenly w-[50%]">
                    <a href="https://www.facebook.com/profile.php?id=100077564808877" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Facebook size={20}/>
                    </a>
                    <a href="https://www.instagram.com/codescirahul/" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Instagram size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-kumar-375781259/" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Linkedin size={20}/>
                    </a>
                    <a href="https://x.com/CodesciRahul?t=gQJpQo7VSqxANy1_1SIf6Q&s=08" target="__blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <Twitter size={20}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
