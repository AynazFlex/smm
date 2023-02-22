import Faq from '../Faq';
import { useState } from "react"
import './Faqs.sass';

const Faqs = () => {
	const [faqs, setfaqs] = useState([
		{
			id: 0,
			question: 'Почему цены на ваши услуги ниже, чем у конкурентов?',
			answer: 'Мы принимаем оплату различными способами, такими как банковские карты, Qiwi-кошелек, Payeer и криптовалюты.',
			open: false
		},
		{
			id: 1,
			question: 'Как вы гарантируете качество услуг?',
			answer: 'Контент',
			open: false
		},
		{
			id: 2,
			question: 'Как я могу узнать о статусе моего заказа?',
			answer: 'Контент',
			open: false
		},
		{
			id: 3,
			question: 'Как быстро выполняется заказ?',
			answer: 'Контент',
			open: false
		},
		{
			id: 4,
			question: 'Какие способы оплаты вы принимаете?',
			answer: 'Контент',
			open: false
		},
		{
			id: 5,
			question: 'Меня не заблокируют?',
			answer: 'Контент',
			open: false
		},
		{
			id: 6,
			question: 'Как я могу связаться с вами?',
			answer: 'Контент',
			open: false
		},
		{
			id: 7,
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
				<Faq faq={faq} index={i} key={faq.id} toggleFAQ={toggleFAQ} />
			))}

		</div>
	);
};

export default Faqs;