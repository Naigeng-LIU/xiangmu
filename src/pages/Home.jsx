import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="h-screen w-full flex flex-col justify-center items-center bg-black text-white text-center px-4"
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <h1 className="text-5xl font-bold mb-4">欢迎来到我的世界</h1>
      <p className="text-lg max-w-xl">
        我是一位音乐与影像创作者，这里是我的个人作品网站。
      </p>
    </motion.div>
  );
}