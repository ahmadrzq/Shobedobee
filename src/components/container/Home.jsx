import { homeImages } from "../../Data/Data"
function Home() {
    return (
        <section className="container" id="home">
            {homeImages.map((homeImage) => {
                return (
                    <div key={homeImage.id}>
                        <img src={homeImage.img} alt="" />
                        <a href="">{homeImage.name}</a>
                    </div>
                );
            })}
        </section>
    );
}
export default Home;