import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <motion.div className="page-loader" exit={{ opacity: 0 }} transition={{ duration: 0.35 }} aria-label="Loading portfolio">
      <motion.div className="loader-mark" animate={{ rotate: 360 }} transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}>
        H
      </motion.div>
    </motion.div>
  );
}
