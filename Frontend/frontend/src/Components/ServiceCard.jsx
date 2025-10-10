import { motion } from "framer-motion";
function ServiceCard({ title, description, emoji }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
      }}
      className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow"
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
