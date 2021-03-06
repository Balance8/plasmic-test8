/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "home": {name: "Home", projectId: "ru5Le9c5MJpf4FoZoJhfNR" },
  
    "pricing": {name: "Pricing", projectId: "ru5Le9c5MJpf4FoZoJhfNR" },
  
    "features": {name: "Features", projectId: "ru5Le9c5MJpf4FoZoJhfNR" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["home",] } },
      
        { params: { plasmicLoaderPage: ["pricing",] } },
      
        { params: { plasmicLoaderPage: ["features",] } },
      
    ],
    fallback: false,
  };
}
