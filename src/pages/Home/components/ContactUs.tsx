import { useState } from "react"


const ContactUs = () => {
    const [fields, setFields] = useState({
        name: '',
        email: '',
        subject: '',
        comment: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields((prevFields) => ({
            ...prevFields, [e.target.name]: e.target.value,
        }));
    }

  return (
    <section
      id="home"
      className="
            flex
            flex-col
            gap-14
            py-16
            px-6
            md:px-0
        "
    >
        <div
            className='
                flex
                flex-col
                text-white
                text-center
                gap-6
            '
        >
            <div
                className='
                    text-4xl
                    uppercase
                '
            >
                Contact Us
            </div>
            <div
                className='
                    text-xl
                '
            >
                Get in touch with us
            </div>
        </div>
        <form>
            <div
                className='
                    flex
                    flex-col
                    gap-12
                '
            >
                <div
                    className='
                        flex
                        flex-wrap
                        md:flex-nowrap
                        gap-x-8
                        gap-y-12
                    '
                >
                    <input
                        required
                        type='text'
                        name='name'
                        value={fields.name}
                        onChange={handleChange}
                        placeholder='Your Name'
                        className='
                            w-full
                            md:w-1/2
                            p-3
                            border-b-2
                            border-blue-500
                            text-center
                            text-xl
                            bg-transparent
                            outline-none
                        '
                    />
                    <input
                        required
                        type='email'
                        name='email'
                        value={fields.email}
                        onChange={handleChange}
                        placeholder='Your Email'
                        className='
                            w-full
                            md:w-1/2
                            p-3
                            border-b-2
                            border-blue-500
                            text-center
                            text-xl
                            bg-transparent
                            outline-none
                        '
                    />
                </div>
                <input
                    required
                    type='text'
                    name='subject'
                    value={fields.subject}
                    onChange={handleChange}
                    placeholder='Your Subject'
                    className='
                        w-full
                        p-3
                        border-b-2
                        border-blue-500
                        text-center
                        text-xl
                        bg-transparent
                        outline-none
                    '
                />
                <input
                    required
                    type='text'
                    name='comment'
                    value={fields.comment}
                    onChange={handleChange}
                    placeholder='Your Comment'
                    className='
                        w-full
                        p-3
                        border-b-2
                        border-blue-500
                        text-center
                        text-xl
                        bg-transparent
                        outline-none
                    '
                />
            </div>
        </form>
    </section>
  )
}

export default ContactUs