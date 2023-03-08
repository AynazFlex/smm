import Faq from "./Faq";
import { useState } from "react";
import "./Faqs.sass";

const Faqs = () => {
  const faqs = [
    {
      id: 0,
      question: "Почему цены на ваши услуги ниже, чем у конкурентов?",
      answer:
        "Мы принимаем оплату различными способами, такими как банковские карты, Qiwi-кошелек, Payeer и криптовалюты.",
    },
    {
      id: 1,
      question: "Как вы гарантируете качество услуг?",
      answer: "Контент",
    },
    {
      id: 2,
      question: "Как я могу узнать о статусе моего заказа?",
      answer: "Контент",
    },
    {
      id: 3,
      question: "Как быстро выполняется заказ?",
      answer: "Контент",
    },
    {
      id: 4,
      question: "Какие способы оплаты вы принимаете?",
      answer: "Контент",
    },
    {
      id: 5,
      question: "Меня не заблокируют?",
      answer: "Контент",
    },
    {
      id: 6,
      question: "Как я могу связаться с вами?",
      answer: "Контент",
    },
    {
      id: 7,
      question: "Что произойдет, если мои подписчики или лайки уйдут?",
      answer: "Контент",
    },
  ];
  const [open_id, setOpen_id] = useState(null);

  const setOpen = (id) => setOpen_id((prev_id) => (id === prev_id ? null : id));

  return (
    <div className="faqs">
      {faqs.map((faq) => (
        <Faq
          key={faq.id}
          {...faq}
          open={open_id === faq.id}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

export default Faqs;
