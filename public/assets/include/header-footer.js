class MyComponentHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <title>Website Designing Company in Delhi, Web Design Company in Delhi :: Megatask Technologies</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!-- Styles -->
    <link href='vendor/font-awesome/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,700,300' rel='stylesheet' type='text/css'>
    <link href="fonts/Stroke-Gap-Icons-Webfont/style.css" rel="stylesheet" type="text/css" />
    <!-- components -->
    <link href="vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="vendor/owl-carousel/owl-carousel/owl.carousel.css" rel="stylesheet" type="text/css" />
    <link href="vendor/slider-pro/dist/css/slider-pro.min.css" rel="stylesheet" type="text/css" />
    <link href="vendor/slick-carousel/slick/slick.css" rel="stylesheet" type="text/css" />
    <link href="vendor/animate.css/animate.min.css" rel="stylesheet" type="text/css" />
    <link href="vendor/fancybox/source/jquery.fancybox.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed&display=swap" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet" type="text/css" />
    
`;
  }
}
    
customElements.define('head-content', MyComponentHead);



class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<header class="header scrolling-header">
	<nav id="nav" class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container relative-nav-container">
			
			<a class="navbar-brand scroll" href="index.html"> <img class="normal-logo hidden-xs" src="img/logo-blue.png" alt="logo" /> 
			<img class="scroll-logo hidden-xs" src="img/logo-blue.png" alt="logo" /> 
			<img class="scroll-logo visible-xs-block" src="img/megatask logo_black.png" alt="logo" /> </a>
			<a class="toggle-button visible-xs-block" data-toggle="collapse" data-target="#navbar-collapse"> <i class="fa fa-navicon"></i> </a>
			<div class="navbar-collapse collapse floated" id="navbar-collapse">
				<ul class="nav navbar-nav navbar-with-inside clearfix navbar-right with-border">
					<li class="active"> <a href="index.html">home</a></li>
					<li> <a href="about.html">about</a> </li>
					<li> <a href="portfolio.html">Portfolio</a></li>					
					<li><a href="services.html">services</a></li>
					<li> <a href="blog.html">Blog</a></li>
					<li> <a href="contact.html">Contacts</a></li>
				</ul>
			</div>
		</div>						
	</nav>
</header>
`;
  }
}
    
customElements.define('header-content', MyComponent);





class MyComponentFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<footer>
	<!-- ========================== -->
	<!-- BUY SECTION -->
	<!-- ========================== -->
	<section class="buy-section with-icon">
		<div class="section-icon"><span class="icon icon-Umbrella"></span></div>
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-1 col-sm-9 wow fadeInLeft">
					<div class="section-text">
						<div class=" vcenter like"> <span class="icon icon-Like"></span> </div>
						<div class="buy-text vcenter">
							<div class="top-text">oscend - a creative & multipurpose template</div>
							<div class="bottom-text">Lorem ipsum dolor sit amet consectetur elit sed</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3  wow fadeInRight"> <a href="#" class="btn btn-info ">Buy it now</a> </div>
			</div>
		</div>
	</section>
	<!-- ========================== -->
	<!-- FOOTER - SOCIAL -->
	<!-- ========================== -->
	<section class="social-section dark dark-strong">
		<div class="container dark-content">
			<div class="tt">We are social 24/7 - Get in touch</div>
			<ul class="list-socials">
			  <li><a href="https://www.facebook.com/Megatasktechnology/" target="_blank"><i class="fa fa-facebook"></i></a></li>
				<li><a href="https://twitter.com/megatasktech"><i class="fa fa-twitter" target="_blank"></i></a></li>				
				<li><a href="https://www.linkedin.com/company/megatasktechnologies/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="https://www.instagram.com/megatasktechnologies/" target="_blank"><i class="fa fa-instagram"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCI-TtTxlPXLRRUBTcsFf4FQ/videos" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
				<li><a href="https://in.pinterest.com/megatasktechnologies/" target="_blank"><i class="fa fa-pinterest-p"></i></a></li>
				<li><a href="https://goo.gl/maps/6umwsosfk5kpdeQA8" target="_blank"><i class="fa fa-map-signs"></i></a></li>
			</ul>
		</div>
	</section>
	<!-- ========================== -->
	<!-- FOOTER - FOOTER -->
	<!-- ========================== -->
	<section class="footer-section">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-3">
					<h5>about us</h5>
					<p>Megatask Technologies is a leading web design agency with best all-inclusive custom website design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business.</p>
				</div>
				<div class="col-md-3 col-sm-3">
					<h5>Sitemap</h5>
					<div class="row">
						<div class="col-md-6">
							<ul class="footer-nav">
								<li><a href="#">About Us</a></li>
								<li><a href="#">Portfolio</a></li>
								<li><a href="#">Latest News</a></li>
								<li><a href="#">Contact us</a></li>
							</ul>
						</div>
						<div class="col-md-6">
							<ul class="footer-nav">
								<li><a href="#">Get Help</a></li>
								<li><a href="#">Careers</a></li>
								<li><a href="#">FAQ's</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3">
					<h5>Contact info</h5>
					<ul class="contacts-list">
						<li>
							<p><i class="icon icon-House"></i>D-21 (Second Floor) Lane No.3, Abul Fazal Enclave-Part 1, Jamia Nagar, New Delhi-110025</p>
						</li>
						<li>
							<p><i class="icon icon-Phone2"></i>011 42032023</p>
						</li>
						<li>
							<p><i class="icon icon-Mail"></i><a href="mailto:info@megatasktechnologies.com">info@megatasktechnologies.com</a> </p>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-3">
					<h5>newsletter</h5>
					<p> Subscribe to our newsletter for latest updates about our creative agency </p>
					<div class="form-group has-feedback">
						<input type="email" class="form-control " placeholder="Email address ..."> <i class="icon icon-Mail form-control-feedback"></i> </div>
				</div>
			</div>
		</div>
	</section>
	<section class="copyright-section">
		<p>© Copyright 2018-2022 <span>Megatask Technologies PVT LTD</span>. All Rights Reserved</p>
	</section>
</footer>

`;
  }
}
    
customElements.define('footer-content', MyComponentFooter);


