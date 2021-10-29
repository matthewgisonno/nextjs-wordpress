This is an example of using Next.js with Wordpress as a Headless CMS.  

In this example, I'm using GraphQL to get the data, the pages are pre-rendered at build time, with a re-evaluate of 10 minutes.

Utilizing Yoast SEO Plug and Advanced Custom Fields, which are also pulled into GraphQL data for retrieval.

This is a very primitive example and would need to be refined.  Right now it uses the page order ID to build the navigation, would like to change this to use the actual Menu from the Wordpress site.

Pages are very snappy and load much faster than the wordpress site.