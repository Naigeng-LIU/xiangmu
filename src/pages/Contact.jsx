import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6">联系方式</h1>
      <p className="max-w-2xl text-lg">
        欢迎通过以下方式与我联系：<br />
        📧 邮箱：your@email.com<br />
        🌐 社交媒体：微博 / Instagram / LinkedIn
      </p>
    </motion.div>
  );
}