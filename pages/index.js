
export default function Home({ html }) {
  // console.log(posts)

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} ></div>
    </>
  )
}

function genHTML() {
  // This will be controlled by cms
  const date = '2021/12/30'
  const logosrc = '/images/theforge/forgesmaller.png'
  const backsrc = 'https://doggo.ninja/YMLybm.jpg'
  const message = `WEBSITE
  COMING SOON`.replace("\n", "</span>")
  const title = 'CrossFit The Forge'

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>`+ title +`</title>
  <!-- Stylesheets -->
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/responsive.css" rel="stylesheet">
  
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
  <link rel="icon" href="images/favicon.png" type="image/x-icon">
  
  <!-- Responsive -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  
  <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
  <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
  </head>
  
  <body class="hidden-bar-wrapper">
  
  <div class="page-wrapper">
     
      <!-- Preloder -->
    <div id="preloder" class="preloader">
      <div class="loader"></div>
    </div>
    <!-- Εnd Preloader -->
     
    <!-- Comming Soon -->
    <section class="comming-soon" style="background-image:url(`+ backsrc + `)">
        <div class="auto-container">
            <div class="content">
                <div class="content-inner">
            <!-- Logo Box -->
                    <div class="logo-box">
                        <div class="logo"><a href="#"><img src="`+ logosrc + `" alt="logo" title=""></a></div>
                      </div>
                    <h4><span>`+ message + `</h4>
                      <div class="time-counter"><div class="time-countdown clearfix" data-countdown="`+ date + `"></div></div>
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

  <!--Typeform embed-->
  <a class="typeform-share button" href="https://form.typeform.com/to/dTWy3aN5?typeform-medium=embed-snippet" data-mode="popover" style="width:54px;height:54px;position:fixed;box-shadow:0px 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08);right:26px;bottom:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#0445AF;overflow:hidden;line-height:0;" target="_blank"> <span class="icon"> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style="margin-top:6px;"> <path d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z' fill='white' /> </svg> </span> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>


  </body>
  </html>`

  return html
}

export async function getStaticProps() {
  const html = await genHTML();

  return {
    props: {
      html,
      revalidate: 1,
    },
  };
}