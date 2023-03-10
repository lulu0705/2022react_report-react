import { Row, Col } from "antd";
// import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

export default function MainHome({newposts,topthrees}) {
  return (
    <>
    <header>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-header active carousel-first img-responsive" >
            {/* <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div> */}
          </div>
          <div className="carousel-item carousel-item-header carousel-second img-responsive" >
            {/* <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> */}
          </div>
          <div className="carousel-item carousel-item-header carousel-third img-responsive" >
            {/* <div className="carousel-caption">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>

    <section className="features2 features-layout">
    {/* <div className="container"> ?????? ??? FEATURES ???*/}
    <h2 className="mbr-section-title ">
    ????????????FML
    </h2>
        <div className="media-container-row">
            <div className="p-5 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                <div className="text-image card-img">
                <img src="images/home/features1.jpg" alt="Mobirise" title="" media-simple="true" />
                <div className="text-block">
                    <p>??????method<br/>?????????????????????</p>
                </div>
                </div>
                </div>
            </div>

            <div className="p-5 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                <div className="text-image card-img">
                <img src="images/home/features2.jpg" alt="Mobirise" title="" media-simple="true" />
                <div className="text-block">
                    <p>???????????????????????????</p>
                </div>
                </div>
                </div>
            </div>

            <div className="p-5 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                <div className="text-image card-img">
                <img src="images/home/features3.jpg" alt="Mobirise" title="" media-simple="true" />
                <div className="text-block">
                    <p>???????????????????????????</p>
                </div>
                </div>
                </div>
            </div>

            
        </div>
    {/* </div> */}
    </section>

    <section className="features2 news-layout">
    {/* <div className="container"> ?????? ??? LATEST NEWS ??? */}
    <h2 className="mbr-section-title ">
      ????????????
    </h2>
        <div className="media-container-row">
        {newposts.map(newpost =>(
          <>
            {/* <GridItem  product={product}/> */}
            <div className="p-1 col-8 col-md-4 col-lg-3" key={newpost.id}>
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src={newpost.image} alt="Newpost_image" title="" media-simple="true" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        {newpost.title}
                        </h4>
                        {/*  ??????method????????????????????????????????? */}
                        <p className="mbr-text mbr-fonts-style display-7">
                        {newpost.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="p-1 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="/images/home/news2.jpg" alt="Mobirise" title="" media-simple="true" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        2022???????????????<br/>
                        </h4>
                        <p className="mbr-text mbr-fonts-style display-7">
                        ??????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-1 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="/images/home/news3.jpg" alt="Mobirise" title="" media-simple="true" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        ????????????????????????<br/>
                        </h4>
                        <p className="mbr-text mbr-fonts-style display-7">
                        ?????????????????????FML?????????????????????????????????2/7??????~
                        </p>
                    </div>
                </div>
            </div> */}

          </>
        ))}    
        </div>
    {/* </div> */}
    </section>

    {/* ??? RESERVATION PROCESS ??? */}
    <section className="features14 process-layout">
    <div className="contain align-center">
    <h2 className="mbr-section-title">
      ????????????
    </h2>
        {/* <div className="media-container-column"> */}
            <div className="row justify-content-center">
                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                    <div className="card-main media pb-2">
                        <div className="card-img align-self-center">
                            <img src="images/home/calendar.png" alt="Mobirise" media-simple="true"/>
                        </div>
                        <div className="media-body">
                            <h5 className="card-title py-2 align-left">
                            ????????????
                            </h5>
                        </div>
                    </div>                
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        ?????????????????????????????????????????????????????????
                        </p>
                    </div>
                </div>

                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                <div className="card-main media pb-2">
                    <div className="card-img align-self-center">
                        <img src="images/home/card.png" alt="Mobirise" media-simple="true"/>
                    </div>
                    <div className="media-body">
                        <h5 className="card-title py-2 align-left">
                        ????????????
                        </h5>
                    </div>
                </div>     
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        ???????????????????????????????????????????????????
                        </p>
                    </div>
                </div>

                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                <div className="card-main media pb-2">
                    <div className="card-img align-self-center">
                        <img src="images/home/warehouse.png" alt="Mobirise" media-simple="true"/>
                    </div>
                    <div className="media-body">
                        <h5 className="card-title py-2 align-left">
                        ????????????
                        </h5>
                    </div>
                </div>     
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        ???????????????????????????????????????????????????
                        </p>
                    </div>
                </div>

                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                <div className="card-main media pb-2">
                    <div className="card-img align-self-center">
                        <img src="images/home/clipboard.png" alt="Mobirise" media-simple="true"/>
                    </div>
                    <div className="media-body">
                        <h5 className="card-title py-2 align-left">
                        ????????????
                        </h5>
                    </div>
                </div>     
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        ?????????????????????????????????????????????????????????
                        </p>
                    </div>
                </div>
            </div>

        {/* </div> */}
    </div>
    </section>


    {/* <section className="ftco-section testimony-section bg-light d-none d-md-block p-3 col-8 col-md-3 ">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Testimonies</span>
            <h2>Happy Customer</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div class="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>	
                        <div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div class="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div className="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div className="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                        <div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div className="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                        <div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section> */}

    {/* style="margin: 0 .5em;" carousel-dark */}
     {/* col-8 col-md-3  p-3 d-none d-md-block p-3 col-8 col-md-3  */}

    <section className="card-carousel">
    <h2 className="mbr-section-title">
      ????????????
    </h2>
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cards-wrapper">
          <div className="card col-lg-2 col-md-3 card-layout">
            <img src="images/service/lifeclear1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">????????????</h5>
              <p className="card-text">???????????????????????????<br/>
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????...??????</p>
              <Link href="#" className="btn home_btn">????????????</Link>
            </div>
          </div>
          <div className="card col-lg-2 col-md-3 card-layout">
            <img src="images/service/bugclear2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">???????????????</h5>
              <p className="card-text">???????????????????????????<br/>
              ????????????????????????????????????????????????????????????</p>
              <Link href="#" className="btn home_btn">????????????</Link>
            </div>
          </div>
          <div className="card col-lg-2 col-md-3 card-layout">
            <img src="images/service/lifeclear2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">?????????????????????</h5>
              <p className="card-text">??????????????????-66????????????<br/>
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????...
              </p>
              <Link href="#" className="btn home_btn">????????????</Link>
            </div>
          </div>
        </div>
        </div>

        {/* card-text ????????????50 */}
        <div className="carousel-item">
          <div className="cards-wrapper">
            <div className="card col-lg-2 col-md-3 card-layout">
              <img src="images/service/windowdoor3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">???????????????????????????</h5>
                <p className="card-text">?????????????????????<br/>
                ???????????????????????????????????????2022??????????????????????????????:??????????????????????????????????????????????????????????????????...
                </p>
                <Link href="#" className="btn home_btn">????????????</Link>
              </div>
            </div>
            <div className="card col-lg-2 col-md-3 card-layout">
              <img src="images/service/bugclear1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">????????????</h5>
                <p className="card-text">????????????-????????????????????????<br/>
                ????????????????????????30????????????????????????????????????????????????...???????????????????????????????????????1.??????????????????...
                </p>
                <Link href="#" className="btn home_btn">????????????</Link>
              </div>
            </div>
            <div className="card col-lg-2 col-md-3 card-layout">
              <img src="images/service/bathroom3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">??????????????????</h5>
                <p className="card-text">???????????????<br/>
                ????????????????????????????????????????????????
                </p>
                <Link href="#" className="btn home_btn">????????????</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-control-prev">
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      </div>
      <button  className="carousel-control-next" href="#carouselExampleControls" role="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button >
    </div>
    </section>





    </>
  );
}

