import Faq from '../Faq';
import { useState } from "react"
import './Faqs.sass';

const Faqs = () => {
	const [faqs, setfaqs] = useState([
		{
			question: 'Почему цены на ваши услуги ниже, чем у конкурентов?',
			answer: 'Мы принимаем оплату различными способами, такими как банковские карты, Qiwi-кошелек, Payeer и криптовалюты.',
			open: false
		},
		{
			question: 'Как вы гарантируете качество услуг?',
			answer: 'Контент',
			open: false
		},
		{
			question: 'Как я могу узнать о статусе моего заказа?',
			answer: 'Контент',
			open: false
		},
		{
			question: 'Как быстро выполняется заказ?',
			answer: 'Контент',
			open: false
		},
		{
			question: 'Какие способы оплаты вы принимаете?',
			answer: 'Контент',
			open: false
		},
		{
			question: 'Меня не заблокируют?',
			answer: 'Контент',
			open: false
		},
		{
			question: 'Как я могу связаться с вами?',
			answer: 'Контент',
			open: false
		},
		{
			question: 'Что произойдет, если мои подписчики или лайки уйдут?',
			answer: 'Контент',
			open: false
		}
	]);

	const toggleFAQ = index => {
		setfaqs(faqs.map((faq, i) => {
			if (i === index) {
				faq.open = !faq.open
			} else {
				faq.open = false;
			}

			return faq;
		}))
	}
	return (
		<div className="faqs">


			{faqs.map((faq, i) => (
				<Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
			))}

		</div>
	);
};

export default Faqs;