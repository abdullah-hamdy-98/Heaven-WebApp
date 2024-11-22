"use client"
import Image from "next/image";
import Notify from './NotifyMail';
import Counter from './Countdown';
import { motion } from 'framer-motion';

function CommingSoon() {
    return (
        <main>
            <div className="flex flex-col lg:flex-row justify-center lg:px-6 lg:py-6 gap-4 mr-8">
                {/* Left Section */}
                <div className="flex-1 text-center lg:text-left ml-12">
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
                            height={800}
                            className="mx-auto lg:mx-0"
                        />
                    </motion.div>
                </div>
            </div>

            <Counter />
        </main>
    );
}

export default CommingSoon;
