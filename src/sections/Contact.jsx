import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import terminalImg from '/assets/terminal.png';
import arrowUpImg from '/assets/arrow-up.png';

const Contact = () => {

    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const[form, setForm] = useState({
        nome: '',
        email: '',
        menssagem: ''
    })

    const handleChange = ({target:{name,value}}) => {
        setForm({...form, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try{
            await emailjs.send(
                'service_bajd0gh',
                'template_57976jm',
                {
                    from_name: form.name,
                    to_name: 'Luka',
                    from_email: form.email,
                    to_email: 'lukegomes51@gmail.com',
                    message: form.message
                },'x3GCZlcQ_E7cAzTxT')

            setLoading(false);

            alert('Sua mensagem foi enviada.')
            setForm({
                nome: '',
                email: '',
                menssagem: ''
            });
        }catch(error){
            setLoading(false);
            console.log(error)
            alert('Alguma coisa deu errado.')
        }

    }
    return (
        <section id="contato">
            <div className="c-space my-20">
                <div className="relative min-h-screen flex items-center justify-center flex-col">
                    <img src={terminalImg} alt="terminal background" className="absolute inset-0 min-h-screen"/>
                    <div className="contact-container">
                        <h3 className="head-text mt-5">Vamos conversar</h3>
                        <p className="text-lg text-white-600 mt-3">
                            Seja para criar um novo site, aprimorar sua plataforma atual ou dar vida a um projeto 
                            único, estou aqui para ajudar.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">Nome Completo</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="ex., Arley da silva"
                                />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">Endereço de Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="ex., arleydasilva@gmail.com"
                                />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">Sua Mensagem</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="field-input"
                                    placeholder="compartilhe suas idéias ou dúvidas..."
                                />
                            </label>
                            <button type="submit" className="field-btn" disabled={loading}>
                                {loading ? 'Sending': 'Enviar mensagem'}
                                <img src={arrowUpImg} alt="arrow-up" className="field-btn_arrow"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact