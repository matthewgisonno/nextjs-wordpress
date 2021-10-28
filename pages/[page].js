import { useRouter } from 'next/router'
import { getListAllPages, getListAllPagesWithSlug } from './api/api';
import Navigation from '../components/navigation';
import Content from '../components/content';

export default function Pages({ pages }) {
    const wpPages = pages;
    const router = useRouter()
    const { page } = router.query;

    return (
        <>
            {wpPages ? (
                <>
                    <Navigation data={wpPages} slug={page} />
                    <Content data={wpPages} page="true" slug={page} />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export async function getStaticProps() {
    const data = await getListAllPages();
    
    return {
        props: { 
            pages: data.nodes
        },
        revalidate: 600
    }
}
  
export async function getStaticPaths() {
    const dataSlugs = await getListAllPagesWithSlug()

    return {
        paths: dataSlugs.edges.map(({ node }) => `/${node}`) || [],
        fallback: true,
    }
}