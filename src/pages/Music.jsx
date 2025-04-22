import { motion } from 'framer-motion';

export default function Music() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6">音乐作品展示</h1>
      <p className="max-w-2xl text-lg">
        这里将展示您的音乐作品，例如 MP3 播放器、专辑封面、简介等。
      </p>
    </motion.div>
  );
}