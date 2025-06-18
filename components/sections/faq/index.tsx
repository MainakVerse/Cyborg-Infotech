// components/sections/faq.tsx
'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "@/components/atoms/heading";
import Section from "@/components/layout/section";
import { Minus, Plus } from "lucide-react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What is the purpose of this platform?",
    answer: "Our platform helps creators and businesses generate, manage, AI-enabled advanced websites, and content efficiently. It streamlines workflows and enhances productivity with AI-driven tools and touch of creativity.",
  },
  {
    id: 2,
    question: "How trustworthy is it?",
    answer: "With a whopping 5+ years of experience in the industry, we have built a reputation for reliability and quality. Our goal is to provide user satisfaction and quality.",
  },
  {
    id: 3,
    question: "How can I book a project?",
    answer: "No fuss, no muss! Simply visit our website, choose the service you need, and drop a query in the contacts. Our team will guide you through every step.",
  },
  {
    id: 4,
    question: "Do you offer AI solutions?",
    answer: "Yes, our consulting services include AI solutions tailored to your needs. We leverage the latest AI technologies to enhance your projects and workflows.",
  },
  {
    id: 5,
    question: "How secure is my data?",
    answer: "We implement enterprise-grade encryption and follow strict privacy practices to ensure your data remains protected. Along with that, we are GDPR compliant and take your privacy seriously.",
  },
];

const AccordionItem = ({
  item,
  isOpen,
  toggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div className="border-b border-n-6 py-6">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between text-left"
      >
        <h4 className="h5 text-n-1">{item.question}</h4>
        <span>{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="body-2 mt-4 text-n-4">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="faq" className="overflow-hidden">
      <div className="container max-w-3xl">
        
        <Heading title="Frequently Asked Questions" />

        <div className="mt-10 space-y-6">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
