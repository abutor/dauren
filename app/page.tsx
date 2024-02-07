"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, set] = useState(false);
  const [show, hidden] = useState(false);

  useEffect(() => { set(true) }, []);

  return loaded && <>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
        <a style={{ fontSize: '15pt', fontWeight: 'bold' }}>DHOUSE estate</a>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Главная</a></li>
            <li><a className="nav-link scrollto" href="#about">О нас</a></li>
            <li><a className="nav-link scrollto" href="#services">Услуги</a></li>
            {/* <li><a className="nav-link scrollto " href="#portfolio">Портфолио</a></li> */}
            <li><a className="nav-link scrollto" href="#team">Команда</a></li>
            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>  */}
            <li><a className="nav-link scrollto" href="#contact">Контакты</a></li>
            {/* <li><a onClick={() => hidden(!show)} className="nav-link scrollto" href="#team">{show ? 'Скрыть' : 'Показать'}</a></li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/* .navbar  */}

      </div>
    </header>{/* End Header-- >

    < !-- ======= Hero Section =======  */}
    <section id="hero" className="d-flex align-items-center">

      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>DHOUSE estate - Ваш партнер в Астане</h1>
            <h2>Ежегодно производятся на рынке недвижимости тысяча сделок разного вида, в этом деле принципиально важно выбрать надежную компанию, а агентство недвижимости DHOUSE estate делает ставку именно на качество и быстрое решение запросов клиента.</h2>
            {/* <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div> */}
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src="best.jpg" className="img-fluid" alt="" style={{ boxShadow: '0 2px 15px grey', borderRadius: '10px' }} />
          </div>
        </div>
      </div>

    </section>

    <main id="main">

      {/* ======= About Section =======  */}
      <section id="about" className="about">
        <div className="container">

          <div className="row">
            <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
            </div>

            <div
              className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>Найдем ваш идеальный дом!</h3>
              <p>Мы ведем контроль выполняемой работы и осуществление координации специалистов.</p>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <h4 className="title">Индивидуальный подход</h4>
                <p className="description">Мы помогаем нашим клиентам выгодно приобретать продавать или сдавать недвижимость в Астане.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-gift"></i></div>
                <h4 className="title">Лучшие предложения</h4>
                <p className="description">Секрет успеха нашей компаний честность и профессионализм сотрудников нашей компаний.</p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-atom"></i></div>
                <h4 className="title">Профессиональная поддержка</h4>
                <p className="description">Квалифицированные риэлторы обеспечивают успешные и беззаботные сделки.</p>
              </div>

            </div>
          </div>

        </div>
      </section>{/* End About Section  */}

      {/* ======= Counts Section =======  */}
      <section id="counts" className="counts" style={{ display: show ? 'block' : 'none' }}>
        <div className="container">

          <div className="text-center title">
            <h3>What we have achieved so far</h3>
            <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
          </div>

          <div className="row counters position-relative">

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Projects</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Hard Workers</p>
            </div>

          </div>

        </div>
      </section>
      {/* End Counts Section  */}

      {/* ======= Clients Section =======  */}
      <section id="clients" className="clients" style={{ display: show ? 'block' : 'none' }}>
        <div className="container">

          <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <div className="client-logo">
                <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
              </div>
            </div>

          </div>

        </div>
      </section>{/* End Clients Section  */}

      {/* ======= Services Section =======  */}
      <section id="services" className="services section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Услуги</h2>
            <p>Доверьтесь нам в поиске, покупке или аренде недвижимости - &quot;DHOUSE estate&quot; сделает этот процесс легким и приятным
              для вас..</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-cash-stack" style={{ color: "#ff689b" }}></i></div>
                <h4 className="title">Арендодателю</h4>
                <p className="description">
                  <ul>
                    <li>поможем управлять недвижимостью в Ваше отсутствие</li>
                    <li>организовать строительные работы и ремонт</li>
                    <li>организовать трансфер аренда машины</li>
                    <li>подключить-зарегистрировать телефон и интернет</li>
                    <li>приобрести мебель и обустроить жилье</li>
                    <li>работа  с коммунальными службами</li>
                  </ul></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-calendar4-week" style={{ color: '#e9bf06' }}></i></div>
                <h4 className="title">Арендатору</h4>
                <p className="description">
                  <ul>
                    <li>Большой ассортимент жилплощади начиная с эконом до премиум класса</li>
                    <li>Профессионально подобрать недвижимость по вашим критериям</li>
                    <li>Получить вид на жительства в Астане</li>
                    <li>Гарантия лучшей цены</li>
                    <li>Служба поддержки 24/7</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-chat-text" style={{ color: '#3fcdc7' }}></i></div>
                <h4 className="title">Купля продажа</h4>
                <p className="description">
                  <ul>
                    <li>Законность и уверенность в сделке</li>
                    <li>Получить услуги юриста нотариуса</li>
                    <li>Открыть собственный бизнес и правильно инвестировать с проcчетом окупаемости .</li>
                    <li>Составить завещание</li>
                    <li>Платить налог на имущество</li>
                  </ul>
                </p>
              </div>
              {/* </div>
            <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-credit-card-2-front" style={{ color: '#41cf2e' }}></i></div>
                <h4 className="title"><a href="">Экспертная Оценка</a></h4>
                <p className="description">Наша компания предоставляет профессиональную экспертную оценку стоимости
                  коммерческой и жилой недвижимости, гарантируя соответствие рыночным ценам</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-globe" style={{ color: '#d6ff22' }}></i></div>
                <h4 className="title"><a href="">Обновленная База Данных</a></h4>
                <p className="description">Мы поддерживаем постоянно обновляемую и актуальную базу данных, чтобы вы всегда
                  имели доступ к последним предложениям на рынке</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-clock" style={{ color: '#4680ff' }}></i></div>
                <h4 className="title"><a href="">Рыночный Анализ</a></h4>
                <p className="description">Мы регулярно проводим мониторинг цен на рынке, предоставляя вам актуальную
                  информацию для принятия обоснованных решений о покупке или аренде недвижимости</p>
              </div>*/}
            </div>
          </div>

        </div>
      </section>{/* End Services Section  */}

      {/* ======= Portfolio Section =======  */}
      <section id="portfolio" className="portfolio" style={{ display: show ? 'block' : 'none' }}>
        <div className="container">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
              in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                      className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>{/* End Portfolio Section  */}

      {/* ======= Testimonials Section =======  */}
      <section id="testimonials" className="testimonials" style={{ display: show ? 'block' : 'none' }}>
        <div className="container position-relative">

          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                    quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>{/* End testimonial item  */}

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                    quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>{/* End testimonial item  */}

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                    tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>{/* End testimonial item  */}

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                    minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>{/* End testimonial item  */}

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                    labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>{/* End testimonial item  */}

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </section>{/* End Testimonials Section  */}

      {/* ======= Team Section =======  */}
      <section id="team" className="team section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Наша Команда - Сила &quot;DHOUSE estate&quot;</h2>
            <p>В составе &quot;DHOUSE estate&quot; трудится выдающаяся команда профессионалов, готовых предоставить вам непревзойденный
              уровень обслуживания в сфере недвижимости. Наши риэлторы - это сплоченная группа опытных экспертов,
              преследующих общую цель - сделать процесс поиска и приобретения недвижимости максимально приятным и успешным
              для каждого клиента.</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/photo.jpeg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Даурен</h4>
                  <span>CEO</span>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch"  style={{ display: 'none' }}>
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="">
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>  */}

            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch"  style={{ display: 'none' }}>
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="">
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch"  style={{ display: 'none' }}>
              <div className="member">
                <div className="member-img">
                  <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="">
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>  */}

          </div>

        </div>
      </section>{/* End Team Section  */}

      {/* ======= Gallery Section =======  */}
      <section id="gallery" className="gallery">
        <div className="container">

          <div className="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
              in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row no-gutters">

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                  <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>{/* End Gallery Section  */}

      {/* ======= Contact Section =======  */}
      <section id="contact" className="contact" style={{ display: show ? 'block' : 'none' }}>
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
              consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
              in iste officiis commodi quidem hic quas.</p>
          </div>

          {/* <div>
            <iframe style="border:0; width: 100%; height: 270px;"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0" allowfullscreen></iframe>
          </div>  */}

          <div className="row mt-5">

            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0" style={{ display: 'none' }}>

              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>{/* End Contact Section  */}

    </main>

    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
      className="bi bi-arrow-up-short"></i></a>

  </>
}
