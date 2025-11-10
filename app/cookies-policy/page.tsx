"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { COOKIES_POLICY } from "@/lib/constants";
import { TextWithLinks } from "@/components/ui/text-with-links";

const CookiesPolicyPage = () => {
  return (
    <section className="flex w-full h-full bg-white mt-20">
      <div className="flex flex-col space-y-5 w-full container mx-auto py-20 px-10">
        <SectionTitle title="Cookies Policy" />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-black/60 pt-10"
        >
          Last Updated: 22/10/2025
        </motion.p>

        <div className="flex flex-col space-y-8">
          {COOKIES_POLICY.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-xl font-semibold text-black">
                {index + 1}. {item.title}
              </h3>
              {item.desc && (
                <p className="text-base text-black/80">
                  <TextWithLinks>{item.desc}</TextWithLinks>
                </p>
              )}
              {item.items && (
                <ul className="list-disc list-inside space-y-2 text-base text-black/70">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex}>
                      <TextWithLinks>{listItem}</TextWithLinks>
                    </li>
                  ))}
                </ul>
              )}
              {item.table && (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        {item.table.headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className="border border-gray-300 px-4 py-2 text-left font-semibold text-black"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="even:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium text-black">
                            {row.type}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-black/70">
                            {row.purpose}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicyPage;
