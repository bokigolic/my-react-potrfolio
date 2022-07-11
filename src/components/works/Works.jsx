
import "./works.scss";

export default function Works() {

  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src='assets/mobile.png' alt="" />
                </div>
                <h2>Title</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
            <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />

            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt=""/>
      <img src="assets/arrow.png" className="arrow right" alt=""/>

    </div>

  )
}