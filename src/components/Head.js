import Head from 'next/head'

// We can probably customize this a little more with some params
export default function Header() {
    return(
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />

            <title>FloraSync - Ag IoT Framework</title>
            <link rel="icon" href="/favicon.ico" />
        </Head> 
    )
}