import Head from 'next/head'

function createMeta() {
    return {
        __html: `<meta charset="utf-8">
        <title>BlackFit HTML-5 Template | Comming Soon</title>

        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <link href="css/responsive.css" rel="stylesheet">

        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
        <link rel="icon" href="images/favicon.png" type="image/x-icon">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        `
    };
}

export default function Meta() {
    return (
        <Head>
            <head dangerouslySetInnerHTML={createMeta()}></head>
        </Head>
    )
}