// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import SimpleImageSlider from "react-simple-image-slider";


// export function MySlider({ images }) {
//     return (
//         // <div className="slide-container">
//         // <Slide>
//         //     {images.map((slideImage, index) => (
//         //         // <div key={index}>
//         //         //     <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
//         //         //         <span style={spanStyle}>{slideImage.caption}</span>
//         //         //     </div>
//         //         // </div>
//         //         <img key={index} src={slideImage} alt="test" />
//         //     ))}
//         // </Slide>
//         // </div>
//         <SimpleImageSlider
//         width={395}
//         height={255}
//         images={images}
//         showBullets={false}
//         showNavs={false}
//         navSize={20}
//         navStyle={1}
//         navMargin={5}
//       />
//     )
// }

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function MySlider({ images }){
    return (
        <Carousel emulateTouch={false} showStatus={false} showIndicators={false} animationHandler={"fade"} swipeable={false}>
            {images.map((image, index) => (
                <div key={index} className="w-full ">
                    <img src={image} alt="" className="aspect-[1.75] object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-105 md:group-hover:scale-100"/>
                </div>
            ))}
        </Carousel>
    )
}
