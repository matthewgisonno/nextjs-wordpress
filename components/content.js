import Head from "next/head";
export default function Content(props) {
    return (
        <>
            <div className="m-5">
                {props.slug ? (
                    <>
                        {props.data
                        .filter(c => c.slug === props.slug)
                        .map((data, key) => (
                            <div key={key}>
                                <Head>
                                    <title>{data.title}</title>
                                </Head>
                                <h1 className="text-4xl" dangerouslySetInnerHTML={{ __html: data.title }} />
                                <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                <div className="mt-10">Yoast SEO Meta Description Field: {data.seo.metaDesc}</div>
                                <div className="mt-10">Yoast SEO Focus Keyphrase Field: {data.seo.focuskw}</div>
                                <div className="mt-10">Advanced Custom Fields - Favorite Music Field: {data.extraPageFields.favoriteMusic}</div>
                                <div className="mt-10">Advanced Custom Fields - Favorite Surfer Field: {data.extraPageFields.favoriteSurfer}</div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>

                    </>
                )}
            </div>
        </>
    );
}