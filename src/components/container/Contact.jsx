export default function Contact() {
    return (
        <section className="contact_container">
            <div>
                <div className="title">NewsLetter</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, aliquid.</p>
            </div>
            <form action="">
                <div className="inputs">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                </div>
                <button>Send</button>
            </form>
        </section>
    );
}