import React from "react";
import keaImg from "../../../static/assets/images/about/kea2.jpg";

export default function() {
    return(
        <div className="side-by-side-wrapper">
            <div className="left-column"
            style={{
                backgroundImage: `url(${keaImg})`
              }}
            />

            <div className="right-column">
                <div className="title">
                    <h1>about me</h1>
                </div>
                <div className="padding">
                 Leo urna molestie at elementum eu facilisis sed. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Enim eu turpis egestas pretium aenean. Pellentesque adipiscing commodo elit at imperdiet dui. In est ante in nibh mauris cursus mattis molestie a. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Posuere morbi leo urna molestie at. Consectetur purus ut faucibus pulvinar elementum integer. Purus ut faucibus pulvinar elementum integer enim. Fermentum et sollicitudin ac orci phasellus egestas. Sem viverra aliquet eget sit amet tellus cras. Neque vitae tempus quam pellentesque nec. Ipsum consequat nisl vel pretium lectus quam. Fermentum iaculis eu non diam. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Aliquam sem et tortor consequat id porta nibh venenatis cras. Iaculis at erat pellentesque adipiscing. Scelerisque in dictum non consectetur a erat. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
                </div>
            </div>
        </div>
    );
}