

function Comming({ inner }) {
    console.log(inner)
    return (
        <div>
            <div className="debug" dangerouslySetInnerHTML={inner}></div>
            <p>hi</p>
        </div>
    )
}

function getStaticProps() {
    // This will be controlled by cms
    const date = '2021/12/30'
    const logosrc = '/images/theforge/forge.png'
    const backsrc = 'https://doggo.ninja/YMLybm.jpg'
    const message = `WEBSITE
    COMING SOON`.replace("\n", "</span>")

    const html = `
<body class="hidden-bar-wrapper">

<div class="page-wrapper">

<!-- Preloder -->
<div id="preloder" class="preloader">
<div class="loader"></div>
</div>
<!-- Εnd Preloader -->

<!-- Comming Soon -->
<section class="comming-soon" style="background-image:url(` + backsrc + `)">
<div class="auto-container">
    <div class="content">
        <div class="content-inner">
            <!-- Logo Box -->
            <div class="logo-box">
                <div class="logo"><a href="index.html"><img src="` + logosrc + `" alt="logo" title=""></a></div>
            </div>
            <h4><span>` + message + `</h4>
            <div class="time-counter"><div class="time-countdown clearfix" data-countdown="` + date + `"></div></div>
        </div>
    </div>
</div>
</section>
<!-- End Comming Soon -->

</div>
<!--End pagewrapper-->

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>

<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/jquery.fancybox.js"></script>
<script src="js/appear.js"></script>
<script src="js/owl.js"></script>
<script src="js/wow.js"></script>
<script src="js/jquery.countdown.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/script.js"></script>

</body>`

    const exportedhtml = {
        props: {
            
        }
    }

    console.log(html)

    return exportedhtml
}

export default Comming