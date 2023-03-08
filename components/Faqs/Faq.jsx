const Faq = ({ open, setOpen, question, answer, id }) => {
  return (
    <div
      className={"faqItem " + (open ? "act" : "")}
      onClick={() => setOpen(id)}
    >
      <div className="faqItem__top">
        <div className="faqItem__title">{question}</div>
        <button className="faqItem__ico" type="button">
          <svg
            width="22"
            height="13"
            viewBox="0 0 22 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.724509 1.05727C1.24521 0.536572 2.08943 0.536572 2.61013 1.05727L11.0007 9.4478L19.3912 1.05727C19.9119 0.536572 20.7561 0.536572 21.2768 1.05727C21.7975 1.57797 21.7975 2.42219 21.2768 2.94289L11.9435 12.2762C11.4228 12.7969 10.5785 12.7969 10.0578 12.2762L0.724509 2.94289C0.20381 2.42219 0.20381 1.57797 0.724509 1.05727Z"
              fill="#E0E0E0"
            />
          </svg>
        </button>
      </div>
      <div className="faqItem__cont">{answer}</div>
    </div>
  );
};

export default Faq;
