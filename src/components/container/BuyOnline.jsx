import { buyOnlineDatas } from "../../Data/Data";
export default function BuyOnline() {
    return (
        <section className="container">
            <div className="title">
                When You <span>Buy Online</span>
            </div>
            <div className="buyOnline">
                {buyOnlineDatas.map((buyOnlineData) => (
                    <div className="data" key={buyOnlineData.id}>
                        <div className="data_title">
                            {buyOnlineData.title}
                        </div>
                        <p>{buyOnlineData.text}</p>
                        <a href="" className="btnText">{buyOnlineData.btnText}</a>
                        <div className="payment_images">
                            {buyOnlineData.img?.map((img,index) => (
                                <img src={img} alt="" key={index} className="payment_img"/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}