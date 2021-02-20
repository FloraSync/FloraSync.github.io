import Head from 'next/head'

// We can probably customize this a little more with some params
export default function Header() {
    return(
        <Head>
            <title>FloraSync</title>
            <link rel="icon" href="/favicon.ico" />
        </Head> 
    )
}