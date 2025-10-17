// import Head from 'next/head'

// const PageHead = ({ headTitle }) => {
//     return (
//         <>
//             <Head>
//                 <title>
//                     {headTitle ? headTitle : "Ananta-Critical Minerals Dashboard"}
//                 </title>
//                 <link rel="shortcut icon" href="favicon.png" />
//                 <link rel="preconnect" href="https://fonts.bunny.net" />
//                 <link
//                     href="https://fonts.bunny.net/css?family=roboto:300,300i,400,400i,500,500i,700,700i,900,900i"
//                     rel="stylesheet"
//                 />
//             </Head>
//         </>
//     )
// }

// export default PageHead

import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Ananta-Critical Minerals Dashboard"}
                </title>
                <link rel="shortcut icon" href="favicon.png" />
                {/* Google Fonts Poppins */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead
