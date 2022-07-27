import banner from "../../assets/banner.png"
import "./Banner.css"

function Banner({img, text,imgDescription}){
    return(
        <div className="banner">
            <h1>{text}</h1>
            <img src={img} alt={imgDescription} />
            <div className="bannerCover"></div>

        </div>
    )
}

export default Banner; 