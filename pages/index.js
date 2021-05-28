import getPostData from '../lib/airtable'

export default function Home({ html }) {
  // console.log(posts)

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} ></div>
    </>
  )
}


async function genHTML() {
  // this gets the minified data
  const posts = await getPostData();

  var data = {}

  // loads it into an object
  for (const rec in posts) {
    // console.log(posts[rec].fields.value)
    data[posts[rec].fields.id] = {value: posts[rec].fields.value}
    data[posts[rec].fields.id].extra = posts[rec].fields.extra
  }

  // console.log(data)

  const date = data.countdown.value
  
  const logosrc = data.logosmall.value
  
  const backsrc = data.background.value
  
  const message = data.welcome_message.value.replace("\n", "</span>")
  
  const typeform = data.typeform.value

  const title = data.title.value

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
`
+ typeform +
`
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
