"use client";
import Image from "next/image";
import Notify from "./NotifyMail";
import { motion } from "framer-motion";

function CommingSoon() {
    return (
        <div>
            <header className="lg:px-36 lg:py-16 px-24 py-12">
                <div className="flex-1">
                    <Image
                        src="/logo/logo.png"
                        alt="Site Logo"
                        width={200}
                        height={50}
                        className="h-auto max-h-[50px] md:max-h-[70px]"
                    />
                </div>
            </header>

            <div className="flex items-center justify-center lg:pt-22 pt-0">
                <div className="flex flex-col lg:flex-row justify-center gap-6 mr-8">
                    {/* Left Section */}
                    <div className="flex-1 text-center lg:text-left ml-12">
                        <motion.h1
                            className="lg:text-heading1-bold lg:ml-4 pb-2 text-blue-1 text-heading1-mob"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Oops!
                        </motion.h1>

                        <motion.h2
                            className="lg:text-heading2-bold ml-2 text-gray-1 uppercase text-heading2-mob"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Under Construction
                        </motion.h2>

                        <motion.p
                            className="lg:text-heading2-regular text-gray-1 text-heading3-mob"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            We are working hard to launch our website very soon!
                        </motion.p>

                        <Notify />
                    </div>

                    {/* Right Section */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Image
                                src="/HeroSection/BACK.png"
                                alt="Under Construction Illustration"
                                width={550}
                                height={1200}
                                className="mx-auto lg:mx-0 lg:w-max w-fit ml-4"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommingSoon;
