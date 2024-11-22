"use client";
import Image from "next/image";
import Notify from "./NotifyMail";
import { motion } from "framer-motion";

function CommingSoon() {
    return (
        <div>
            {/* Header */}
            <header className="flex justify-center px-6 py-12 md:px-12 md:py-8 lg:px-36 lg:py-16 lg:block lg:text-center">
                <div className="flex items-center">
                    <Image
                        src="/logo/logo.png"
                        alt="Site Logo"
                        width={200}
                        height={50}
                        className="h-auto max-h-[50px] md:max-h-[70px]"
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Section */}
                    <div className="flex-1 text-center lg:text-center">
                        <motion.h1
                            className="lg:text-heading1-bold text-blue-1 text-heading1-mob"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Oops!
                        </motion.h1>

                        <motion.h2
                            className="lg:text-heading2-bold text-gray-1 uppercase text-heading2-mob"
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
                                className="mx-auto max-w-full lg:w-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CommingSoon;
