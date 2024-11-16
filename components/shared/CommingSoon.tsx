"use client"
import Image from "next/image";
import Notify from './NotifyMail';
import Counter from './Countdown';
import { motion } from 'framer-motion';

function CommingSoon() {
    return (
        <main>
            <div className="flex flex-col lg:flex-row justify-center px-6 py-6 gap-4">
                {/* Left Section */}
                <div className="flex-1 text-center lg:text-left ml-12">
                    <motion.h1
                        className="text-heading1-bold text-blue-1"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Oops!
                    </motion.h1>

                    <motion.h2
                        className="text-heading2-bold text-gray-1 uppercase"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Under Construction
                    </motion.h2>

                    <motion.p
                        className="text-heading2-regular text-gray-1"
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
