const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getListAllPages() {
    const data = await fetchAPI(`
        {
            pages(first: 10000, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
                nodes {
                    slug
                    id
                    menuOrder
                    isFrontPage
                    title(format: RENDERED)
                    content(format: RENDERED)
                    extraPageFields {
                        favoriteMusic
                        favoriteSurfer
                    }
                    seo {
                        metaDesc
                        metaKeywords
                        focuskw
                    }
                }
            }
        }
    `);
    return data?.pages;
}

export async function getListAllPagesWithSlug() {
    const data = await fetchAPI(`
        {
            pages(first: 10000, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    return data?.pages;
  }